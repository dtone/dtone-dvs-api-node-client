'use strict';

/**
 * The Countries class has all the functions DVS API provides related to
 * countries.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Countries
 */
exports.Countries = class Countries {
  constructor ({ httpClient }) {
    this.url = '/countries';
    this.__httpClient = httpClient;
  }

  /**
   * Get all the countries.
   * @param {Object} options - The parameters to provider the API.
   * @param {Object} [options.params] - The query params for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries/get
   * @returns {AsyncIterator.<DVSAPIResponse>}
   */
  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  /**
   * Get a country by its ISO code.
   * @param {Object} options - The parameters to provider the API.
   * @param {string} [options.countryIsoCode] - The country ISO code.
   * @link https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries~1{country_iso_code}/get
   * @returns {Promise.<DVSAPIResponse>}
   */
  async getByCountryIsoCode ({ countryIsoCode }) {
    const url = `${this.url}/${countryIsoCode}`;

    return this.__httpClient.get({ url });
  }
};
