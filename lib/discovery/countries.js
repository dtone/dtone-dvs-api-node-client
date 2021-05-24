'use strict';

/**
 *
 */
exports.Countries = class Countries {
  constructor ({ httpClient }) {
    this.url = '/countries';
    this.__httpClient = httpClient;
  }

  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByCountryIsoCode ({ countryIsoCode }) {
    const url = `${this.url}/${countryIsoCode}`;

    return this.__httpClient.get({ url });
  }
};
