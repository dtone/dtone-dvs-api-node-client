'use strict';

/**
 * https://dvs-api-doc.dtone.com/#tag/Services
 */
let config = null,
  axios = require('axios'),
  joi = require('joi');

exports.init = function (appConfig) {
  config = appConfig;
  return this;
};

exports.getServices = function (options) {
  let { error } = getServicesOptionsSchema().validate(options),
    result = {
      page: 0,
      totalPages: 0,
      perPage: 0,
      data: null
    },
    myPromise = null;

  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join(','));
  }

  myPromise = new Promise((resolve, reject) => {
    axios.get(config.host + '/services', {
      params: options,
      auth: {
        username: config.apiKey,
        password: config.apiSecret
      }
    }).then((response) => {
      result.page = response.headers['x-page'];
      result.perPage = response.headers['x-per-page'];
      result.apiVersion = response.headers['x-api-version'];
      result.correlationId = response.headers['x-correlation-id'];
      result.rateLimitLimit = response.headers['x-ratelimit-limit'];
      result.rateLimitRemaining = response.headers['x-ratelimit-remaining'];
      result.totalItems = response.headers['x-total'];
      result.totalPages = response.headers['x-total-pages'];

      let { error } = getServicesDataSchema().validate(response.data);

      if (error) {
        return reject(error);
      }

      result.data = response.data;

      return resolve(result);
    }).catch((err) => {
      // 4XX
      // 5XX
      // timeouts
      reject(err);
    });
  });

  return myPromise;
};

exports.getServiceById = function (options) {
  let { error } = getServiceByIdOptionsSchema().validate(options),
    myPromise = null,
    result = {
      data: null
    };

  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join(','));
  }

  myPromise = new Promise((resolve, reject) => {
    axios.get(config.host + `/services/${options.id}`, {
      auth: {
        username: config.apiKey,
        password: config.apiSecret
      }
    }).then((response) => {
      let { error } = getServiceDataSchema().validate(response.data);

      if (error) {
        return reject(error);
      }

      result.data = response.data;

      return resolve(result);
    }).catch((err) => {
      return reject(err);
    });
  });

  return myPromise;
};

function getServicesOptionsSchema () {
  return joi.object({
    page: joi.number(),
    perPage: joi.number()
  });
}

function getServiceByIdOptionsSchema () {
  return joi.object({
    id: joi.number().required()
  });
}

function getServicesDataSchema () {
  return joi.array().items(joi.object({
    id: joi.number().required(),
    name: joi.string().required()
  }));
}

function getServiceDataSchema () {
  return joi.object({
    id: joi.number().required(),
    name: joi.string().required()
  });
}
