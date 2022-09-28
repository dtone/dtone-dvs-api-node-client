import { AxiosInstance } from "axios";

/**
 * @private
 */
export class HTTPClient {
    constructor({ apiKey, apiSecret, apiTimeout, baseUrl }: {
        apiKey: string;
        apiSecret: string;
        apiTimeout: number;
        baseUrl: string;
    });
    client: AxiosInstance;
    get({ url, params }: {
        url: string;
        params?: Object;
    }): Promise<DVSAPIResponse>;
    getWithPages({ url, params }: {
        url: string;
        params: Object;
    }): {};
    post({ url, params, data }: {
        url: string;
        params?: Object
        data?: Object
    }): Promise<DVSAPIResponse>;
    __request({ data, method, params, url }: {
        data: Object;
        method: string;
        params: Object;
        url: string;
    }): Promise<DVSAPIResponse>;
}
/**
 * The API repsonse object that is returned on successful API exection.
 * @class
 */
declare class DVSAPIResponse {
    constructor(result: Object);
    /**
     * @type {DVSAPIResponseMetaData}
     */
    metaData: DVSAPIResponseMetaData;
    /**
     * The DVS API response body.
     */
    data: Object;
}
/**
 * An async iteratable object
 * @typedef AsyncIterator`<T>`
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of}
 * @example
 * const it = dvsClient.account.balances.get({page: 1, perPage: 10});
 * for await(let data of it) {
 *   console.log(data);
 * }
 */
/**
 * The DVS API response meta data
 * @class
 */
declare class DVSAPIResponseMetaData {
    /**
     * @private
     */
    private static __parser;
    constructor(headers: Object);
    /**
     * The API response date as ISO string.
     * @type string
     */
    date: string;
    /**
     * The page number in the result set.
     * @type number
     */
    page: number;
    /**
     * The number of items per page.
     * @type number
     */
    perPage: number;
    /**
     * The rate limit
     * @type number
     */
    rateLimit: number;
    /**
     * The un-used rate limite
     * @type number
     */
    rateLimitRemaining: number;
    /**
     * The total number of items in the result.
     * @type number
     */
    total: number;
    /**
     * The total pages in the result
     * @type number
     */
    totalPages: number;
}
export {DVSAPIResponse};
