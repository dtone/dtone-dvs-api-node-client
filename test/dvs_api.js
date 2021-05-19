'use strict';

const should = require('should');

describe('Initialization', () => {
  it('Should throw an exception when the environment is invalid', () => {
    const dvsApi = require('../dvs_api');
    should(() => { dvsApi.init('ABC', 'DEF', 'staging'); }).throw();
  });
});
