'use strict';

const { BenefitTypes } = require('./benefit_types'),
  { Countries } = require('./countries'),
  { Operators } = require('./operators'),
  { Products } = require('./products'),
  { Promotions } = require('./promotions'),
  { Services } = require('./services');

/**
 *
 */
exports.Discovery = class Discovery {
  constructor ({ httpClient }) {
    this.benefitTypes = new BenefitTypes({ httpClient });
    this.countries = new Countries({ httpClient });
    this.operators = new Operators({ httpClient });
    this.products = new Products({ httpClient });
    this.promotions = new Promotions({ httpClient });
    this.services = new Services({ httpClient });
  }
};
