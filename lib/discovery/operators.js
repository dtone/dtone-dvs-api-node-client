'use strict';

/**
 *
 */
exports.Operators = class Operators {
  constructor ({ httpClient }) {
    this.url = '/operators';
    this.__httpClient = httpClient;
  }

  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByOperatorId ({ operatorId }) {
    const url = `${this.url}/${operatorId}`;

    return this.__httpClient.get({ url });
  }
};
