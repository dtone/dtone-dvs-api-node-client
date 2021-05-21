'use strict';

/**
 *
 */
exports.Countries = class Countries {
  constructor ({ httpClient }) {
    this.url = '/countries';
    this.httpClient = httpClient;
  }

  get ({ params }) {
    return this.httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByCountryIsoCode ({ countryIsoCode }) {
    const url = `${this.url}/${countryIsoCode}`;

    return this.httpClient.get({ url });
  }
};
