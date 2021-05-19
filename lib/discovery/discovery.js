'use strict';

let config = null;

exports.init = function (appConfig) {
  config = appConfig;

  exports.services = require('./services').init(config);
  exports.countries = require('./countries').init(config);
  exports.operators = require('./operators').init(config);

  return this;
};
