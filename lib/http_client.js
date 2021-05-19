'use strict';

const Axios = require('axios'),
  Joi = require('joi'),
  client = null;

/**
 *
 */
class HTTPClient {
  constructor({apiKey, apiSecret, baseUrl}) {
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

exports.HTTPClient = HTTPClient;

/**
 *
 */
exports.init = function (baseUrl) {
  Axios.create({
    baseURL: baseUrl
  });
};

/**
 *
 */
exports.get = async (endpoint, headers = {}) => {
  let promise = new Promise(resolve, reject) => {
    Axios.get(endpoint, {
      headers: headers
    });
  }
  return;
};

/**
 *
 */
function getHeadersValidationSchema () {
  return joi.object({});
};
