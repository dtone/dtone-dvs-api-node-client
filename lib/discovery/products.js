'use strict';

/**
 * The Products class has all the functions DVS API provides related to
 * products.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Products
 */
class Products {
  constructor ({ httpClient }) {
    this.url = '/products';
    this.__httpClient = httpClient;
  }

  /**
   * Get all the products.
   * @param {Object} options - The parameters to provider the API.
   * @param {Object} [options.params] - The query params for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Products/paths/~1products/get
   * @returns {AsyncIterator.<DVSAPIResponse>}
   */
  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  /**
   * Get a product by its ID.
   * @param {Object} options - The parameters to provider the API.
   * @param {number} [options.productId] - The product ID.
   * @link https://dvs-api-doc.dtone.com/#tag/Products/paths/~1products~1{product_id}/get
   * @returns {Promise.<DVSAPIResponse>}
   */
  async getByProductId ({ productId }) {
    const url = `${this.url}/${productId}`;

    return this.__httpClient.get({ url });
  }
};

/**
 *
 */
module.exports = {
  Products
};
