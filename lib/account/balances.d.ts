import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The Balances class has all the functions DVS API provides related to
 * balance.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Balances
 */
export class Balances {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * Get all the balances.
     * @param {Object} options - The parameters to provider the API.
     * @param {Object} [options.params] - The query params for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Balances/paths/~1balances/get
     * @returns {AsyncIterator.<DVSAPIResponse>}
     */
    get({ params }: {
        params?: Object;
    }): AsyncGenerator<DVSAPIResponse>;
}