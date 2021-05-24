'use strict';

const Axios = require('axios'),
  CamelCaseKeys = require('camelcase-keys'),
  SnakeCaseKeys = require('snakecase-keys'),

  { DVSAPIError } = require('./errors'),
  PackageInfo = require('../package');

Axios.defaults.headers.common['User-Agent'] = generateUserAgentString();
Axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 *
 */
exports.HTTPClient = class HTTPClient {
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
    let result;

    do {
      result = await this.__request({
        params,
        url,

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
        }),
        metaData = this.__getMetaData(result),
        resultData = CamelCaseKeys(result.data, { deep: true });

      return {
        metaData,
        data: resultData
      };
    } catch (err) {
      if (err.response) {
        throw new DVSAPIError(err.response);
      }

      throw new Error(err.message);
    }
  }

  __getMetaData (result) {
    const parser = (str) => {
      const int = Number.parseInt(str);
      return Number.isNaN(int) ? str : int;
    };

    return {
      date: new Date(result.headers.date).toISOString(),
      page: parser(result.headers['x-page']),
      perPage: parser(result.headers['x-per-page']),
      rateLimit: parser(result.headers['x-ratelimit-limit']),
      rateLimitRemaining: parser(result.headers['x-ratelimit-remaining']),
      total: parser(result.headers['x-total']),
      totalPages: parser(result.headers['x-total-pages'])
    };
  }
};

/**
 *
 */
function generateUserAgentString () {
  const userAgentItems = [
    `${PackageInfo.name}/${PackageInfo.version}`,
    `node/${process.versions.node}`,
    `${process.platform}/${process.arch}`
  ];

  return userAgentItems.join('; ');
}
