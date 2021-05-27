'use strict';

const Axios = require('axios'),
  CamelCaseKeys = require('camelcase-keys'),
  SnakeCaseKeys = require('snakecase-keys'),

  { DVSAPIError } = require('./errors'),
  PackageInfo = require('../package');

Axios.defaults.headers.common['User-Agent'] = generateUserAgentString();
Axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * An async iteratable object
 * @typedef AsyncIterator<T>
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of}
 * @example
 * const it = dvs.account.balances.get({page: 1, perPage: 10});
 * for await(let data of it) {
 *   console.log(data);
 * }
 */

/**
 * The DVS API response meta data
 * @class
 */
class DVSAPIResponseMetaData {
  /**
   * The API response date as ISO string.
   * @type string
   */
  date;

  /**
   * The page number in the result set.
   * @type number
   */
  page;

  /**
   * The number of items per page.
   * @type number
   */
  perPage;

  /**
   * The rate limit
   * @type number
   */
  rateLimit;

  /**
   * The un-used rate limite
   * @type number
   */
  rateLimitRemaining;

  /**
   * The total number of items in the result.
   * @type number
   */
  total;

  /**
   * The total pages in the result
   * @type number
   */
  totalPages;

  constructor(headers){
    this.date = new Date(headers.date).toISOString();
    this.page = DVSAPIResponseMetaData.__parser(headers['x-page']);
    this.perPage = DVSAPIResponseMetaData.__parser(headers['x-per-page']);
    this.rateLimit = DVSAPIResponseMetaData.__parser(
      headers['x-ratelimit-limit']
    );
    this.rateLimitRemaining = DVSAPIResponseMetaData.__parser(
      headers['x-ratelimit-remaining']
    );
    this.total = DVSAPIResponseMetaData.__parser(headers['x-total']);
    this.totalPages = DVSAPIResponseMetaData.__parser(
    headers['x-total-pages']
    );
  }

  /**
   * @private
   */
  static __parser (str) {
    const int = Number.parseInt(str);
    return Number.isNaN(int) ? str : int;
  }
};

/**
 * The API repsonse object that is returned on successful API exection.
 * @class
 */
class DVSAPIResponse {
  /**
   * @type {DVSAPIResponseMetaData}
   */
  metaData

  /**
   * The DVS API response body.
   */
  data

  constructor (result) {
    this.metaData = new DVSAPIResponseMetaData(result.headers);
    this.data = CamelCaseKeys(result.data, { deep: true });
  }
};

/**
 * @private
 */
class HTTPClient {
  constructor ({ apiKey, apiSecret, apiTimeout, baseUrl }) {
    this.client = Axios.create({
      auth: {
        username: apiKey,
        password: apiSecret
      },
      baseURL: baseUrl,
      responseType: 'json',
      timeout: apiTimeout
    });
  }

  async get ({ url, params = {} }) {
    return this.__request({
      params,
      url,

      method: 'get'
    });
  }

  async * getWithPages ({ url, params }) {
    params = Object.assign({}, { page: 1 }, params);

    let result;

    do {
      result = await this.__request({
        url,
        params,

        method: 'get'
      });

      yield result;

      params.page++;
    } while (result.metaData.page < result.metaData.totalPages);
  }

  async post ({ url, params = {}, data = {} }) {
    return this.__request({
      data,
      params,
      url,

      method: 'post'
    });
  }

  async __request ({ data, method, params, url }) {
    data = data ? SnakeCaseKeys(data) : {};
    params = params ? SnakeCaseKeys(params) : {};

    try {
      const result = await this.client({
          data,
          method,
          params,
          url
        });

      return new DVSAPIResponse(result);
    } catch (err) {
      if (err.response) {
        throw new DVSAPIError(err.response);
      }

      throw new Error(err.message);
    }
  }
};

/**
 * @private
 */
function generateUserAgentString () {
  const userAgentItems = [
    `${PackageInfo.name}/${PackageInfo.version}`,
    `node/${process.versions.node}`,
    `${process.platform}/${process.arch}`
  ];

  return userAgentItems.join('; ');
}

/**
 *
 */
module.exports = {
  HTTPClient
};
