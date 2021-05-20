'use strict';

const Axios = require('axios'),

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
    return this.client({
      url,
      params,
      method: 'get'
    });
  }

  async post ({ url, params = {}, data = {} }) {
    return this.client({
      url,
      params,
      data,
      method: 'post'
    });
  }
};

/**
 *
 */
function generateUserAgentString () {
  let userAgent = `${PackageInfo.name}${PackageInfo.version}; `;
  userAgent += `node/${process.versions.node}; `;
  userAgent += `${process.platform}/${process.arch}`;

  return userAgent;
}
