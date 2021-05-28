'use strict';

/**
 * The AsyncTransaction class has all the functions DVS API provides related to
 * async transactions.
 */
class AsyncTransaction {
  constructor ({ httpClient }) {
    this.url = '/async/transactions';
    this.__httpClient = httpClient;
  }

  /**
   * Create a transaction asynchronously.
   * @param {Object} options - The parameters to provide the API.
   * @param {Object} [options.data] - The request body for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1async~1transactions/post
   * @returns {Promise.<DVSAPIResponse>}
   */
  async create ({ data }) {
    return this.__httpClient.post({
      data,
      url: this.url
    });
  }

  /**
   * Confirm a transaction asynchronously.
   * @param {Object} options - The parameters to provider the API.
   * @param {number} [options.transactionId] - The transaction ID.
   * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1async~1transactions~1{transaction_id}~1confirm/post
   * @returns {Promise.<DVSAPIResponse>}
   */
  async confirm ({ transactionId }) {
    const url = `${this.url}/${transactionId}/confirm`;

    return this.__httpClient.post({ url });
  }
};

/**
 *
 */
module.exports = {
  AsyncTransaction
};
