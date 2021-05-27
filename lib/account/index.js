'use strict';

const { Balances } = require('./balances');

/**
 * The Account class has all the functions DVS API provides related to an
 * account.
 * @class
 */
class Account {
  constructor ({ httpClient }) {
    /**
     * @type {Balances}
     */
    this.balances = new Balances({ httpClient });
  }
};

/**
 * @module account
 */
module.exports = {
  /**
   * @type {Account}
   * @alias module:account.Account
   */
  Account
};
