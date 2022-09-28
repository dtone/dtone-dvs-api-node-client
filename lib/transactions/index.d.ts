import { AsyncTransaction } from "./async_transaction";
import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The Transactions class has all the functions DVS API provides related to
 * transactions.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Transactions
 */
export class Transactions {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * @type {AsyncTransaction}
     */
    async: AsyncTransaction;
    /**
     * Get all the transactions.
     * @param {Object} options - The parameters to provider the API.
     * @param {Object} [options.params] - The query params for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1transactions/get
     * @returns {AsyncIterator.<DVSAPIResponse>}
     */
    get({ params }: {
        params?: Object;
    }): AsyncGenerator<DVSAPIResponse>;
    /**
     * Get a transaction by ID.
     * @param {Object} options - The parameters to provider the API.
     * @param {number} [options.transactionId] - The transaction ID.
     * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1transactions~1{transaction_id}/get
     * @returns {Promise.<DVSAPIResponse>}
     */
    getByTransactionId({ transactionId }: {
        transactionId?: number;
    }): Promise<DVSAPIResponse>;
    /**
     * Cancel a transaction
     * @param {Object} options - The parameters to provider the API.
     * @param {number} [options.transactionId] - The transaction ID.
     * @link https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1transactions~1{transaction_id}~1cancel/post
     * @returns {Promise.<DVSAPIResponse>}
     */
    cancel({ transactionId }: {
        transactionId?: number;
    }): Promise<DVSAPIResponse>;
}
