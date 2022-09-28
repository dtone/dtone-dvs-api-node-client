'use strict';

const { AsyncTransaction } = require('./async_transaction');

/**
 * The Transactions class has all the functions DVS API provides related to
 * transactions.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Transactions
 */
class Transactions {
  constructor ({ httpClient }) {
    this.url = '/transactions';
    this.__httpClient = httpClient;

    /**
     * @type {AsyncTransaction}
     */
    this.async = new AsyncTransaction({ httpClient });
  }

  /**
   * Get all the transactions.
   * @param {Object} options - The parameters to provider the API.
   * @param {Object} [options.params] - The query params for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1transactions/get
   * @returns {AsyncIterator.<DVSAPIResponse>}
   */
  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  /**
   * Get a transaction by ID.
   * @param {Object} options - The parameters to provider the API.
   * @param {number} [options.transactionId] - The transaction ID.
   * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1transactions~1{transaction_id}/get
   * @returns {Promise.<DVSAPIResponse>}
   */
  async getByTransactionId ({ transactionId }) {
    const url = `${this.url}/${transactionId}`;

    return this.__httpClient.get({ url });
  }

  /**
   * Cancel a transaction
   * @param {Object} options - The parameters to provider the API.
   * @param {number} [options.transactionId] - The transaction ID.
   * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1transactions~1{transaction_id}~1cancel/post
   * @returns {Promise.<DVSAPIResponse>}
   */
  async cancel ({ transactionId }) {
    const url = `${this.url}/${transactionId}/cancel`;

    return this.__httpClient.post({ url });
  }
};

/**
 *
 */
module.exports = {
  Transactions
};
