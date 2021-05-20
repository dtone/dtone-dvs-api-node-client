'use strict';

const Axios = require('axios'),

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

  async post ({ url, params = {}, data = {} }) {
    return this.__request({
      data,
      params,
      url,

      method: 'post'
    });
  }

  async __request ({ data = {}, method, params = {}, url }) {
    try {
      const result = await this.client({
        data,
        method,
        params,
        url
      });

      return result.data;
    } catch (err) {
      if (err.response) {
        throw new DVSAPIError(err.response);
      }

      throw new Error('Not implemented');
    }
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
