'use strict';

const { BenefitTypes } = require('./benefit_types'),
  { Countries } = require('./countries'),
  { Operators } = require('./operators'),
  { Products } = require('./products'),
  { Promotions } = require('./promotions'),
  { Services } = require('./services');

/**
 * The Discovery class has all the functions DVS API provides related to
 * discovery
 * @class
 */
class Discovery {
  constructor ({ httpClient }) {
    /**
     * @type {BenefitTypes}
     */
    this.benefitTypes = new BenefitTypes({ httpClient });

    /**
     * @type {Countries}
     */
    this.countries = new Countries({ httpClient });

    /**
     * @type {Operators}
     */
    this.operators = new Operators({ httpClient });

    /**
     * @type {Products}
     */
    this.products = new Products({ httpClient });

    /**
     * @type {Promotions}
     */
    this.promotions = new Promotions({ httpClient });

    /**
     * @type {Services}
     */
    this.services = new Services({ httpClient });
  }
};

/**
 *
 */
module.exports = {
  Discovery
};
