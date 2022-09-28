import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The AsyncTransaction class has all the functions DVS API provides related to
 * async transactions.
 */
export class AsyncTransaction {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * Create a transaction asynchronously.
     * @param {Object} options - The parameters to provide the API.
     * @param {Object} [options.data] - The request body for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1async~1transactions/post
     * @returns {Promise.<DVSAPIResponse>}
     */
    create({ data }: {
        data?: Object;
    }): Promise<DVSAPIResponse>;
    /**
     * Confirm a transaction asynchronously.
     * @param {Object} options - The parameters to provider the API.
     * @param {number} [options.transactionId] - The transaction ID.
     * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1async~1transactions~1{transaction_id}~1confirm/post
     * @returns {Promise.<DVSAPIResponse>}
     */
    confirm({ transactionId }: {
        transactionId?: number;
    }): Promise<DVSAPIResponse>;
}
