'use strict';

/**
 *
 */
exports.Products = class Products {
  constructor ({ httpClient }) {
    this.url = '/products';
    this.httpClient = httpClient;
  }

  get ({ params }) {
    return this.httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByProductId ({ productId }) {
    const url = `${this.url}/${productId}`;

    return this.httpClient.get({ url });
  }
};
