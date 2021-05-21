'use strict';

/**
 *
 */
exports.Promotions = class Promotions {
  constructor ({ httpClient }) {
    this.url = '/promotions';
    this.httpClient = httpClient;
  }

  get ({ params }) {
    return this.httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByPromotionId ({ promotionId }) {
    const url = `${this.url}/${promotionId}`;

    return this.httpClient.get({ url });
  }
};
