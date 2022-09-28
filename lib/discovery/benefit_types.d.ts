import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The BenefitTypes class has all the functions DVS API provides related to
 * benefits.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Benefits
 */
export class BenefitTypes {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * Get all the benefit types.
     * @param {Object} options - The parameters to provider the API.
     * @param {Object} [options.params] - The query params for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Benefits/paths/~1benefit-types/get
     * @returns {AsyncIterator.<DVSAPIResponse>}
     */
    get({ params }: {
        params?: Object;
    }): AsyncGenerator<DVSAPIResponse>;
}
