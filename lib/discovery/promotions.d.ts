import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The Promotions class has all the functions DVS API provides related to
 * promotions.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Promotions
 */
export class Promotions {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * Get all the promotions.
     * @param {Object} options - The parameters to provider the API.
     * @param {Object} [options.params] - The query params for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Promotions/paths/~1promotions/get
     * @returns {AsyncIterator.<DVSAPIResponse>}
     */
    get({ params }: {
        params?: Object;
    }): AsyncGenerator<DVSAPIResponse>;
    /**
     * Get a promotion by its ID.
     * @param {Object} options - The parameters to provider the API.
     * @param {number} [options.promotionId] - The promotion ID.
     * @link https://dvs-api-doc.dtone.com/#tag/Promotions/paths/~1promotions~1{promotion_id}/get
     * @returns {Promise.<DVSAPIResponse>}
     */
    getByPromotionId({ promotionId }: {
        promotionId?: number;
    }): Promise<DVSAPIResponse>;
}
