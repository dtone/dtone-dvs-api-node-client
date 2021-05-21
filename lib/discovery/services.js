'use strict';

/**
 *
 */
exports.Services = class Services {
  constructor ({ httpClient }) {
    this.url = '/services';
    this.httpClient = httpClient;
  }

  get ({ params }) {
    return this.httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByServiceId ({ serviceId }) {
    const url = `${this.url}/${serviceId}`;

    return this.httpClient.get({ url });
  }
};
