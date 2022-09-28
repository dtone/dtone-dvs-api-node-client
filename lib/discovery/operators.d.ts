import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The Operators class has all the functions DVS API provides related to
 * operators.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Operators
 */
export class Operators {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * Get all the operators.
     * @param {Object} options - The parameters to provider the API.
     * @param {Object} [options.params] - The query params for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Operators/paths/~1operators/get
     * @returns {AsyncIterator.<DVSAPIResponse>}
     */
    get({ params }: {
        params?: Object;
    }): AsyncGenerator<DVSAPIResponse>;
    /**
     * Get an operator by its ID.
     * @param {Object} options - The parameters to provider the API.
     * @param {number} [options.operatorId] - The operator ID.
     * @link https://dvs-api-doc.dtone.com/#tag/Operators/paths/~1operators~1{operator_id}/get
     * @returns {Promise.<DVSAPIResponse>}
     */
    getByOperatorId({ operatorId }: {
        operatorId?: number;
    }): Promise<DVSAPIResponse>;
}
