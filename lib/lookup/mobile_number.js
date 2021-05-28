'use strict';

/**
 * The MobileNumber class all the functions DVS API provides related to mobile
 * number lookup.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Mobile-Number
 */
class MobileNumber {
  constructor ({ httpClient }) {
    this.url = '/lookup/mobile-number';
    this.__httpClient = httpClient;
  }

  /**
   * Lookup by mobile number
   * @param {Object} options - The parameters to provider the API.
   * @param {string} [options.mobileNumber] - The mobile number.
   * @param {Object} [options.params] - The query params for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Mobile-Number/paths/~1lookup~1mobile-number~1{mobile_number}/get
   * @returns {AsyncIterator.<DVSAPIResponse>}
   */
  getByMobileNumber ({ mobileNumber, params }) {
    const url = `${this.url}/${mobileNumber}`;

    return this.__httpClient.getWithPages({ params, url });
  }
};

/**
 *
 */
module.exports = {
  MobileNumber
};
