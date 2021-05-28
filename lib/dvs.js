'use strict';

const Joi = require('joi'),

  { Account } = require('./account'),
  { Discovery } = require('./discovery'),
  { DVSAPIError } = require('./errors'),
  { HTTPClient } = require('./http_client'),
  { Lookup } = require('./lookup'),
  { Transactions } = require('./transactions'),

  Default = {
    API_TIMEOUT: 60 * 1000,
    BASE_URL: 'https://dvs-api.dtone.com/v1'
  };

/**
 * The DVS class provides all the functions to interact with DVS API
 * @class
 * @typicalname dvsClient
 * @example
 * const dvsClient = new DVS({
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-api-secret'
 * });
 */
class DVS {
  /**
   * Create a DVS instance
   *
   * @param {Object} options - The configuration options.
   * @param {string} [options.apiKey] - The api key for DVS API.
   * @param {string} [options.apiSecret] - The api secret for DVS API.
   * @param {number} [options.apiTimeout=60000] - Specifies the number of
   * milliseconds after which the HTTP request times out. Set 0 to disable
   * timeout.
   * @param {baseUrl} [options.baseUrl=https://dvs-api.dtone.com/v1] - The
   * base url against which all the api functions are executed. Change this to
   * use this library against other environments.
   */
  constructor ({ apiKey, apiSecret, apiTimeout, baseUrl }) {
    const optsSchema = Joi.object({
        apiKey: Joi.string().required(),
        apiSecret: Joi.string().required(),

        apiTimeout: Joi.number().default(Default.API_TIMEOUT),

        baseUrl: Joi.string()
        .uri({ scheme: ['http', 'https'] })
        .default(Default.BASE_URL)
      }),

      { error, value } = optsSchema.validate({
        apiKey,
        apiSecret,
        apiTimeout,
        baseUrl
      });

    if (error) {
      throw error;
    }

    this.__httpClient = new HTTPClient({
      apiKey: value.apiKey,
      apiSecret: value.apiSecret,
      apiTimeout: value.apiTimeout,
      baseUrl: value.baseUrl
    });

    /**
     * @type {Account}
     */
    this.account = new Account({
      httpClient: this.__httpClient
    });

    /**
     * @type {Discovery}
     */
    this.discovery = new Discovery({
      httpClient: this.__httpClient
    });

    /**
     * @type {Lookup}
     */
    this.lookup = new Lookup({
      httpClient: this.__httpClient
    });

    /**
     * @type {Transactions}
     */
    this.transactions = new Transactions({
      httpClient: this.__httpClient
    });
  }
};

/**
 * @module dvs
 */
module.exports = {
  /**
   * @type {DVSAPIError}
   * @alias module:dvs.DVSAPIError
   */
  DVSAPIError,

  /**
   * @type {DVS}
   * @alias module:dvs.DVS
   */
  DVS
};
