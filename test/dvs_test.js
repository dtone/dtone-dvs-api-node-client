/**
 * @author Jose Nidhin
 */
'use strict';

const Assert = require('assert').strict,

  { DVS } = require('../lib/dvs');

describe('DVS - lib/dvs', () => {
  it('should export DVS class', () => {
    Assert.equal(
      typeof DVS,
      'function',
      'Expected DVS to be a function'
    );
  });

  it('should throw if not initialised properly', () => {
    Assert.throws(() => {
      const dvs = new DVS();
      Assert(dvs);
    }, Error);

    Assert.throws(() => {
      const dvs = new DVS({
        apiKey: 'test'
      });
      Assert(dvs);
    }, Error);

    Assert.throws(() => {
      const dvs = new DVS({
        apiSecret: 'test'
      });
      Assert(dvs);
    }, Error);
  });

  it('should have all the DVS API functions', () => {
    const dvs = new DVS({
        apiKey: 'test',
        apiSecret: 'test'
      }),

      requiredFunctions = [
        'account',
        'discovery',
        'lookup',
        'transactions'
      ];

    requiredFunctions.forEach((item) => {
      Assert.equal(
        typeof dvs[item],
        'object',
        `Expected "${item}" to be a object`
      );
    });
  });
});
