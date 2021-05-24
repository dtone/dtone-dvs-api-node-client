'use strict';

/**
 *
 */
exports.BenefitTypes = class BenefitTypes {
  constructor ({ httpClient }) {
    this.url = '/benefit-types';
    this.__httpClient = httpClient;
  }

  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }
};
