'use strict';

/**
 *
 */
exports.Promotions = class Promotions {
  constructor ({ httpClient }) {
    this.url = '/promotions';
    this.__httpClient = httpClient;
  }

  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByPromotionId ({ promotionId }) {
    const url = `${this.url}/${promotionId}`;

    return this.__httpClient.get({ url });
  }
};
