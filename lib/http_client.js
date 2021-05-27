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
  constructor (headers) {
  /**
   * The API response date as ISO string.
   * @type string
   */
    this.date = new Date(headers.date).toISOString();

    /**
   * The page number in the result set.
   * @type number
   */
    this.page = DVSAPIResponseMetaData.__parser(headers['x-page']);

    /**
   * The number of items per page.
   * @type number
   */
    this.perPage = DVSAPIResponseMetaData.__parser(headers['x-per-page']);

    /**
   * The rate limit
   * @type number
   */
    this.rateLimit = DVSAPIResponseMetaData.__parser(
      headers['x-ratelimit-limit']
    );

    /**
   * The un-used rate limite
   * @type number
   */
    this.rateLimitRemaining = DVSAPIResponseMetaData.__parser(
      headers['x-ratelimit-remaining']
    );

    /**
   * The total number of items in the result.
   * @type number
   */
    this.total = DVSAPIResponseMetaData.__parser(headers['x-total']);

    /**
   * The total pages in the result
   * @type number
   */
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
  constructor (result) {
  /**
   * @type {DVSAPIResponseMetaData}
   */
    this.metaData = new DVSAPIResponseMetaData(result.headers);

    /**
   * The DVS API response body.
   */
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
