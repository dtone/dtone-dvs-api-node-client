import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The Countries class has all the functions DVS API provides related to
 * countries.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Countries
 */
export class Countries {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * Get all the countries.
     * @param {Object} options - The parameters to provider the API.
     * @param {Object} [options.params] - The query params for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries/get
     * @returns {AsyncIterator.<DVSAPIResponse>}
     */
    get({ params }: {
        params?: Object;
    }): AsyncGenerator<DVSAPIResponse>;
    /**
     * Get a country by its ISO code.
     * @param {Object} options - The parameters to provider the API.
     * @param {string} [options.countryIsoCode] - The country ISO code.
     * @link https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries~1{country_iso_code}/get
     * @returns {Promise.<DVSAPIResponse>}
     */
    getByCountryIsoCode({ countryIsoCode }: {
        countryIsoCode?: string;
    }): Promise<DVSAPIResponse>;
}
