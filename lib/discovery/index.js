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
  /**
   * @type {BenefitTypes}
   */
  benefitTypes;

  /**
   * @type {Countries}
   */
  countries;

  /**
   * @type {Operators}
   */
  operators;

  /**
   * @type {Products}
   */
  products;

  /**
   * @type {Promotions}
   */
  promotions;

  /**
   * @type {Services}
   */
  services;

  constructor ({ httpClient }) {
    this.benefitTypes = new BenefitTypes({ httpClient });
    this.countries = new Countries({ httpClient });
    this.operators = new Operators({ httpClient });
    this.products = new Products({ httpClient });
    this.promotions = new Promotions({ httpClient });
    this.services = new Services({ httpClient });
  }
};

/**
 *
 */
module.exports = {
  Discovery
};
