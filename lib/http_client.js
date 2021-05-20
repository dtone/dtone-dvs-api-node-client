'use strict';

const Axios = require('axios'),

  PackageInfo = require('../package');

Axios.defaults.headers.common['User-Agent'] = generateUserAgentString();
Axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 *
 */
exports.HTTPClient = class HTTPClient {
  constructor ({ apiKey, apiSecret, baseUrl }) {
    this.axios = Axios.create({
      baseUrl,
      auth: {
        username: apiKey,
        password: apiSecret
      },
      responseType: 'json'
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
