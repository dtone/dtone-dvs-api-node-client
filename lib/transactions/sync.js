'use strict';

/**
 *
 */
exports.Async = class Async {
  constructor ({ httpClient }) {
    this.url = '/sync/transactions';
    this.__httpClient = httpClient;
  }

  async create ({ data }) {
    return this.__httpClient.post({
      data,
      url: this.url
    });
  }

  async confirm ({ transactionId }) {
    const url = `${this.url}/${transactionId}/confirm`;

    return this.__httpClient.post({ url });
  }
};
