'use strict';

const Joi = require('joi'),

  { Account } = require('./account'),
  { Discovery } = require('./discovery'),
  { HTTPClient } = require('./http_client'),

  Default = {
    API_TIMEOUT: 60 * 1000,
    BASE_URL: 'https://dvs-api.dtone.com/v1'
  };

/**
 *
 */
exports.DVS = class DVS {
  constructor (opts = {}) {
    const optsSchema = Joi.object({
        apiKey: Joi.string().required(),
        apiSecret: Joi.string().required(),

        apiTimeout: Joi.number().default(Default.API_TIMEOUT),

        baseUrl: Joi.string()
        .uri({ scheme: ['http', 'https'] })
        .default(Default.BASE_URL)
      }),

      { error, value } = optsSchema.validate(opts);

    if (error) {
      throw error;
    }

    this.__httpClient = new HTTPClient({
      apiKey: value.apiKey,
      apiSecret: value.apiSecret,
      apiTimeout: value.apiTimeout,
      baseUrl: value.baseUrl
    });

    this.account = new Account({
      httpClient: this.__httpClient
    });

    this.discovery = new Discovery({
      httpClient: this.__httpClient
    });
  }
};
