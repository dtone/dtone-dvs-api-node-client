'use strict';

/**
 *
 */
exports.Countries = class Countries {
  constructor ({ httpClient }) {
    this.url = '/countries';
    this.httpClient = httpClient;
  }

  getCountries ({ params }) {
    return this.httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getCountryByIsoCode ({ countryIsoCode }) {
    const url = `${this.url}/${countryIsoCode}`;

    return this.httpClient.get({ url });
  }
};
