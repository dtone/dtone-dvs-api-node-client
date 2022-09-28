import { HTTPClient } from "../http_client";
import { MobileNumber } from "./mobile_number";

/**
 * The Lookup class has all the function DVS API provides related to lookup
 * @class
 */
export class Lookup {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    mobileNumber: MobileNumber;
}
