'use strict';

/**
 * The Balances class has all the functions DVS API provides related to
 * balance.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Balances
 */
class Balances {
  constructor ({ httpClient }) {
    this.url = '/balances';
    this.__httpClient = httpClient;
  }

  /**
   * Get all the balances.
   * @param {Object} options - The parameters to provider the API.
   * @param {Object} [options.params] - The query params for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Balances/paths/~1balances/get
   * @returns {AsyncIterator.<DVSAPIResponse>}
   */
  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }
};

/**
 *
 */
module.exports = {
  Balances
};
