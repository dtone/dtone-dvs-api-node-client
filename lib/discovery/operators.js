'use strict';

/**
 * The Operators class has all the functions DVS API provides related to
 * operators.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Operators
 */
exports.Operators = class Operators {
  constructor ({ httpClient }) {
    this.url = '/operators';
    this.__httpClient = httpClient;
  }

  /**
   * Get all the operators.
   * @param {Object} options - The parameters to provider the API.
   * @param {Object} [options.params] - The query params for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Operators/paths/~1operators/get
   * @returns {AsyncIterator.<DVSAPIResponse>}
   */
  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  /**
   * Get an operator by its ID.
   * @param {Object} options - The parameters to provider the API.
   * @param {number} [options.operatorId] - The operator ID.
   * @link https://dvs-api-doc.dtone.com/#tag/Operators/paths/~1operators~1{operator_id}/get
   * @returns {Promise.<DVSAPIResponse>}
   */
  async getByOperatorId ({ operatorId }) {
    const url = `${this.url}/${operatorId}`;

    return this.__httpClient.get({ url });
  }
};
