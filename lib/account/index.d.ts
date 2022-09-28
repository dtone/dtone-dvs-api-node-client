import { HTTPClient } from "../http_client";
import { Balances } from "./balances";

/**
 * The Account class has all the functions DVS API provides related to an
 * account.
 * @class
 */
export class Account {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    /**
     * @type {Balances}
     */
    balances: Balances;
}
