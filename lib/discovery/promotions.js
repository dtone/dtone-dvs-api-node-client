'use strict';

/**
 * The Promotions class has all the functions DVS API provides related to
 * promotions.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Promotions
 */
exports.Promotions = class Promotions {
  constructor ({ httpClient }) {
    this.url = '/promotions';
    this.__httpClient = httpClient;
  }

  /**
   * Get all the promotions.
   * @param {Object} options - The parameters to provider the API.
   * @param {Object} [options.params] - The query params for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Promotions/paths/~1promotions/get
   * @returns {AsyncIterator.<DVSAPIResponse>}
   */
  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  /**
   * Get a promotion by its ID.
   * @param {Object} options - The parameters to provider the API.
   * @param {number} [options.operatorId] - The promotion ID.
   * @link https://dvs-api-doc.dtone.com/#tag/Promotions/paths/~1promotions~1{promotion_id}/get
   * @returns {Promise.<DVSAPIResponse>}
   */
  async getByPromotionId ({ promotionId }) {
    const url = `${this.url}/${promotionId}`;

    return this.__httpClient.get({ url });
  }
};
