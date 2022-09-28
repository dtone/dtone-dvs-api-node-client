import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The Services class has all the functions DVS API provides related to
 * services.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Services
 */
export class Services {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * Get all the services.
     * @param {Object} options - The parameters to provider the API.
     * @param {Object} [options.params] - The query params for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Services/paths/~1services/get
     * @returns {AsyncIterator.<DVSAPIResponse>}
     */
    get({ params }: {
        params?: Object;
    }): AsyncGenerator<DVSAPIResponse>;
    /**
     * Get a service by its ID.
     * @param {Object} options - The parameters to provider the API.
     * @param {number} [options.serviceId] - The service ID.
     * @link https://dvs-api-doc.dtone.com/#tag/Services/paths/~1services~1{service_id}/get
     * @returns {Promise.<DVSAPIResponse>}
     */
    getByServiceId({ serviceId }: {
        serviceId?: number;
    }): Promise<DVSAPIResponse>;
}
