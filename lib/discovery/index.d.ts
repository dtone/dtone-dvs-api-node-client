import { HTTPClient } from "../http_client";
import { BenefitTypes } from "./benefit_types";
import { Countries } from "./countries";
import { Operators } from "./operators";
import { Products } from "./products";
import { Promotions } from "./promotions";
import { Services } from "./services";

/**
 * The Discovery class has all the functions DVS API provides related to
 * discovery
 * @class
 */
export class Discovery {
    constructor({ httpClient }: {
        httpClient: HTTPClient;
    });
    /**
     * @type {BenefitTypes}
     */
    benefitTypes: BenefitTypes;
    /**
     * @type {Countries}
     */
    countries: Countries;
    /**
     * @type {Operators}
     */
    operators: Operators;
    /**
     * @type {Products}
     */
    products: Products;
    /**
     * @type {Promotions}
     */
    promotions: Promotions;
    /**
     * @type {Services}
     */
    services: Services;
}
