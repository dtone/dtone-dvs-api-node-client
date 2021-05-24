'use strict';

const { Async } = require('./async'),
  { Sync } = require('./sync');

/**
 *
 */
exports.Transactions = class Transactions {
  constructor ({ httpClient }) {
    this.url = '/transactions';
    this.__httpClient = httpClient;

    this.async = new Async({ httpClient });
    this.sync = new Sync({ httpClient });
  }

  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByTransactionId ({ transactionId }) {
    const url = `${this.url}/${transactionId}`;

    return this.__httpClient.get({ url });
  }

  async cancel ({ transactionId }) {
    const url = `${this.url}/${transactionId}/cancel`;

    return this.__httpClient.post({ url });
  }
};
