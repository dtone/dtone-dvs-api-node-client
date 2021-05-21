'use strict';

/**
 *
 */
exports.Operators = class Operators {
  constructor ({ httpClient }) {
    this.url = '/operators';
    this.httpClient = httpClient;
  }

  getOperators ({ params }) {
    return this.httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByOperatorId ({ operatorId }) {
    const url = `${this.url}/${operatorId}`;

    return this.httpClient.get({ url });
  }
};
