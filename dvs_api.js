'use strict';

const ENV_PRODUCTION = 'production',
  ENV_PREPRODUCTION = 'preproduction',
  HOST_PRODUCTION = 'https://dvs-api.dtone.com/v1',
  HOST_PREPRODUCTION = 'https://preprod-dvs-api.dtone.com/v1',
  axios = require('axios');

let config = {
  host: null,
  apiKey: null,
  apiSecret: null
};

exports.init = function (key, secret, environment = ENV_PRODUCTION) {
  if (environment === ENV_PRODUCTION) {
    config.host = HOST_PRODUCTION;
  } else if (environment === ENV_PREPRODUCTION) {
    config.host = HOST_PREPRODUCTION;
  } else {
    throw new Error(`Invalid Environment "${environment}"`);
  }

  config.apiKey = key;
  config.apiSecret = secret;
};

exports.healthcheck = function () {
  axios.get(config.host + '/healthcheck', {
    auth: {
      username: config.apiKey,
      password: config.apiSecret
    }
  }).then((r) => console.log(r)).catch((err) => console.log(err));
};

exports.discovery = require('./lib/discovery/discovery').init(config);
