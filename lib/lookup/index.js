'use strict';

const { MobileNumber } = require('./mobile_number');

/**
 *
 */
exports.Lookup = class Lookup {
  constructor ({ httpClient }) {
    this.mobileNumber = new MobileNumber({ httpClient });
  }
};
