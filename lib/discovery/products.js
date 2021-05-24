'use strict';

/**
 *
 */
exports.Products = class Products {
  constructor ({ httpClient }) {
    this.url = '/products';
    this.__httpClient = httpClient;
  }

  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByProductId ({ productId }) {
    const url = `${this.url}/${productId}`;

    return this.__httpClient.get({ url });
  }
};
