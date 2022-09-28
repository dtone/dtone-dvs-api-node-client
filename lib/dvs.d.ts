import { HTTPClient } from "./http_client";
import { Account } from "./account";
import { Discovery } from "./discovery";
import { Lookup } from "./lookup";
import { Transactions } from "./transactions";
import { DVSAPIError } from "./errors";

/**
 * The DVS class provides all the functions to interact with DVS API
 * @class
 * @typicalname dvsClient
 * @example
 * const {DVS} = require('@dtone/dvs');
 *
 * const dvsClient = new DVS({
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-api-secret'
 * });
 */
export class DVS {
    /**
     * Create a DVS instance
     *
     * @param {Object} options - The configuration options.
     * @param {string} [options.apiKey] - The api key for DVS API.
     * @param {string} [options.apiSecret] - The api secret for DVS API.
     * @param {number} [options.apiTimeout=60000] - Specifies the number of
     * milliseconds after which the HTTP request times out. Set 0 to disable
     * timeout.
     * @param {baseUrl} [options.baseUrl=https://dvs-api.dtone.com/v1] - The
     * base url against which all the api functions are executed. Change this to
     * use this library against other environments.
     */
    constructor({ apiKey, apiSecret, apiTimeout, baseUrl }: {
        apiKey: string;
        apiSecret: string;
        apiTimeout?: number;
        baseUrl: baseUrl;
    });
    __httpClient: HTTPClient;
    /**
     * @type {Account}
     */
    account: Account;
    /**
     * @type {Discovery}
     */
    discovery: Discovery;
    /**
     * @type {Lookup}
     */
    lookup: Lookup;
    /**
     * @type {Transactions}
     */
    transactions: Transactions;
}

export { DVSAPIError };
