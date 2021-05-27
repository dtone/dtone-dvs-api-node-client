'use strict';

/**
 * The BenefitTypes class has all the functions DVS API provides related to
 * benefits.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Benefits
 */
exports.BenefitTypes = class BenefitTypes {
  constructor ({ httpClient }) {
    this.url = '/benefit-types';
    this.__httpClient = httpClient;
  }

  /**
   * Get all the benefit types.
   * @param {Object} options - The parameters to provider the API.
   * @param {Object} [options.params] - The query params for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Benefits/paths/~1benefit-types/get
   * @returns {AsyncIterator.<DVSAPIResponse>}
   */
  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }
};
