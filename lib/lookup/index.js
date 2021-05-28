'use strict';

const { MobileNumber } = require('./mobile_number');

/**
 * The Lookup class has all the function DVS API provides related to lookup
 * @class
 */
class Lookup {
  constructor ({ httpClient }) {
    this.mobileNumber = new MobileNumber({ httpClient });
  }
};

/**
 *
 */
module.exports = {
  Lookup
};
