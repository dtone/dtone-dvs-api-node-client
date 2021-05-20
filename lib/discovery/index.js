'use strict';

const { Countries } = require('./countries'),
  { Operators } = require('./operators'),
  { Services } = require('./services');

/**
 *
 */
exports.Discovery = class Discovery {
  constructor ({ httpClient }) {
    this.countries = new Countries({ httpClient });
    // this.operators = new Operators({ httpClient });
    // this.services = new Services({ httpClient });
  }
};
