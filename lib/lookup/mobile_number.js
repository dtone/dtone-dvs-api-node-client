'use strict';

/**
 *
 */
exports.MobileNumber = class MobileNumber {
  constructor ({ httpClient }) {
    this.url = '/lookup/mobile-number';
    this.__httpClient = httpClient;
  }

  getByMobileNumber ({ mobileNumber, params }) {
    const url = `${this.url}/${mobileNumber}`;

    return this.__httpClient.getWithPages({ params, url });
  }
};
