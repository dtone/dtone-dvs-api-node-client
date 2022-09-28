import { DVSAPIResponse, HTTPClient } from "../http_client";

/**
 * The Products class has all the functions DVS API provides related to
 * products.
 * @class
 * @link https://dvs-api-doc.dtone.com/#tag/Products
 */
export class Products {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    url: string;
    __httpClient: HTTPClient;
    /**
     * Get all the products.
     * @param {Object} options - The parameters to provider the API.
     * @param {Object} [options.params] - The query params for the API.
     * @link https://dvs-api-doc.dtone.com/#tag/Products/paths/~1products/get
     * @returns {AsyncIterator.<DVSAPIResponse>}
     */
    get({ params }: {
        params?: Object;
    }): AsyncGenerator<DVSAPIResponse>;
    /**
     * Get a product by its ID.
     * @param {Object} options - The parameters to provider the API.
     * @param {number} [options.productId] - The product ID.
     * @link https://dvs-api-doc.dtone.com/#tag/Products/paths/~1products~1{product_id}/get
     * @returns {Promise.<DVSAPIResponse>}
     */
    getByProductId({ productId }: {
        productId?: number;
    }): Promise<DVSAPIResponse>;
}
