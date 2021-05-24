'use strict';

/**
 *
 */
exports.Balances = class Balances {
  constructor ({ httpClient }) {
    this.url = '/balances';
    this.__httpClient = httpClient;
  }

  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }
};
