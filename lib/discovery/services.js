'use strict';

/**
 *
 */
exports.Services = class Services {
  constructor ({ httpClient }) {
    this.url = '/services';
    this.__httpClient = httpClient;
  }

  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  async getByServiceId ({ serviceId }) {
    const url = `${this.url}/${serviceId}`;

    return this.__httpClient.get({ url });
  }
};
