'use strict';

/**
 *
 */
exports.BenefitTypes = class BenefitTypes {
  constructor ({ httpClient }) {
    this.url = '/benefit-types';
    this.httpClient = httpClient;
  }

  get ({ params }) {
    return this.httpClient.getWithPages({
      params,
      url: this.url
    });
  }
};
