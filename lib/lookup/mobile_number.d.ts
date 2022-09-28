import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The MobileNumber class all the functions DVS API provides related to mobile
 * number lookup.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Mobile-Number
 */
export class MobileNumber {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * Lookup by mobile number
     * @param {Object} options - The parameters to provider the API.
     * @param {string} [options.mobileNumber] - The mobile number.
     * @param {Object} [options.params] - The query params for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Mobile-Number/paths/~1lookup~1mobile-number~1{mobile_number}/get
     * @returns {AsyncIterator.<DVSAPIResponse>}
     */
    getByMobileNumber({ mobileNumber, params }: {
        mobileNumber?: string;
        params?: Object;
    }): AsyncGenerator<DVSAPIResponse>;
}
