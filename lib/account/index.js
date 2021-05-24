'use strict';

const { Balances } = require('./balances');

/**
 *
 */
exports.Account = class Account {
  constructor ({ httpClient }) {
    this.balances = new Balances({ httpClient });
  }
};
