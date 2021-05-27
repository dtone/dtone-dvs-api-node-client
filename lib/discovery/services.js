'use strict';

/**
 * The Services class has all the functions DVS API provides related to
 * services.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Services
 */
exports.Services = class Services {
  constructor ({ httpClient }) {
    this.url = '/services';
    this.__httpClient = httpClient;
  }

  /**
   * Get all the services.
   * @param {Object} options - The parameters to provider the API.
   * @param {Object} [options.params] - The query params for the API.
   * @link https://dvs-api-doc.dtone.com/#tag/Services/paths/~1services/get
   * @returns {AsyncIterator.<DVSAPIResponse>}
   */
  get ({ params }) {
    return this.__httpClient.getWithPages({
      params,
      url: this.url
    });
  }

  /**
   * Get a service by its ID.
   * @param {Object} options - The parameters to provider the API.
   * @param {number} [options.operatorId] - The service ID.
   * @link https://dvs-api-doc.dtone.com/#tag/Services/paths/~1services~1{service_id}/get
   * @returns {Promise.<DVSAPIResponse>}
   */
  async getByServiceId ({ serviceId }) {
    const url = `${this.url}/${serviceId}`;

    return this.__httpClient.get({ url });
  }
};
