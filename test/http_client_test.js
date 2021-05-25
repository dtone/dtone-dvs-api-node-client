/**
 * @author Jose Nidhin
 */
'use strict';

const Assert = require('assert').strict,
  Nock = require('nock'),

  { HTTPClient } = require('../lib/http_client');

describe('HTTPClient - lib/http_client', () => {
  it('should export HTTPClient class', () => {
    Assert.equal(
      typeof HTTPClient,
      'function',
      'Expected HTTPClient to be a function'
    );
  });

  it('should not throw when initialised properly', () => {
    Assert.doesNotThrow(() => {
      const httpClient = new HTTPClient({
        apiKey: 'test',
        apiSecret: 'test',
        apiTimeout: 5000,
        baseUrl: 'http://example.com'
      });

      Assert(httpClient);
    }, Error);
  });

  it('should have all required functions', () => {
    const httpClient = new HTTPClient({
        apiKey: 'test',
        apiSecret: 'test',
        apiTimeout: 5000,
        baseUrl: 'http://example.com'
      }),

      requiredFunctions = [
        'get',
        'getWithPages',
        'post'
      ];

    requiredFunctions.forEach((item) => {
      Assert.equal(
        typeof httpClient[item],
        'function',
        `Expected "${item}" to be a function`
      );
    });
  });

  describe('Method get', () => {
    it('should parse api success response', async () => {
      const baseUrl = 'https://example.com',
        httpClient = new HTTPClient({
          baseUrl,
          apiKey: 'test',
          apiSecret: 'test',
          apiTimeout: 5000
        }),
        body = {
          test: 'test'
        },
        headers = {
          date: new Date().toISOString(),
          'x-page': '1',
          'x-per-page': '10',
          'x-rateLimit-limit': '20',
          'x-rateLimit-remaining': '19',
          'x-total': '100',
          'x-total-pages': '10'
        };

      Nock(baseUrl)
      .get('/test')
      .reply(200, body, headers);

      let result;

      try {
        result = await httpClient.get({
          url: '/test'
        });
      } catch (err) {
        Assert.fail('Unexpected error');
      }

      Assert.equal(result.data.test, body.test);
      Assert.equal(result.metaData.date, headers.date);
      Assert.equal(result.metaData.page, 1);
      Assert.equal(result.metaData.perPage, 10);
      Assert.equal(result.metaData.rateLimit, 20);
      Assert.equal(result.metaData.rateLimitRemaining, 19);
      Assert.equal(result.metaData.total, 100);
      Assert.equal(result.metaData.totalPages, 10);
    });

    it('should pass params properly', async () => {
      const baseUrl = 'https://example.com',
        httpClient = new HTTPClient({
          baseUrl,
          apiKey: 'test',
          apiSecret: 'test',
          apiTimeout: 5000
        }),
        params = {
          testParams1: 'testParams1',
          testParams2: 'testParams2'
        },
        headers = {
          date: new Date().toISOString(),
          'x-page': '1',
          'x-per-page': '10',
          'x-rateLimit-limit': '20',
          'x-rateLimit-remaining': '19',
          'x-total': '100',
          'x-total-pages': '10'
        };

      Nock(baseUrl)
      .get('/test')
      .query({
        test_params1: 'testParams1',
        test_params2: 'testParams2'
      })
      .reply((uri, requestBody) => {
        const body = {};
        new URLSearchParams(uri.slice(uri.indexOf('?') + 1))
        .forEach((v, k) => {
          body[k] = v;
        });
        return [200, body, headers];
      });

      let result;

      try {
        result = await httpClient.get({
          params,
          url: '/test'
        });
      } catch (err) {
        Assert.fail('Unexpected error');
      }

      Assert.equal(result.data.testParams1, params.testParams1);
      Assert.equal(result.data.testParams2, params.testParams2);
      Assert.equal(result.metaData.date, headers.date);
      Assert.equal(result.metaData.page, 1);
      Assert.equal(result.metaData.perPage, 10);
      Assert.equal(result.metaData.rateLimit, 20);
      Assert.equal(result.metaData.rateLimitRemaining, 19);
      Assert.equal(result.metaData.total, 100);
      Assert.equal(result.metaData.totalPages, 10);
    });

    it('should parse api error repsonse', async () => {
      const baseUrl = 'https://example.com',
        httpClient = new HTTPClient({
          baseUrl,
          apiKey: 'test',
          apiSecret: 'test',
          apiTimeout: 5000
        }),
        body = {
          errors: [{
            code: 1,
            message: 'test'
          }]
        },
        headers = {
          date: new Date().toISOString()
        };

      Nock(baseUrl)
      .get('/test')
      .reply(400, body, headers);

      await Assert.rejects(() => {
        return httpClient.get({
          url: '/test'
        });
      }, (err) => {
        Assert.equal(err.name, 'DVSAPIError');
        Assert.equal(err.status, 400);
        Assert.equal(err.data.errors[0].code, 1);
        Assert.equal(err.data.errors[0].message, 'test');
        return true;
      });

      Nock(baseUrl)
      .get('/test')
      .reply(401, body, headers);

      await Assert.rejects(() => {
        return httpClient.get({
          url: '/test'
        });
      }, (err) => {
        Assert.equal(err.name, 'DVSAPIError');
        Assert.equal(err.status, 401);
        Assert.equal(err.data.errors[0].code, 1);
        Assert.equal(err.data.errors[0].message, 'test');
        return true;
      });

      Nock(baseUrl)
      .get('/test')
      .reply(404, body, headers);

      await Assert.rejects(() => {
        return httpClient.get({
          url: '/test'
        });
      }, (err) => {
        Assert.equal(err.name, 'DVSAPIError');
        Assert.equal(err.status, 404);
        Assert.equal(err.data.errors[0].code, 1);
        Assert.equal(err.data.errors[0].message, 'test');
        return true;
      });

      Nock(baseUrl)
      .get('/test')
      .reply(429, body, headers);

      await Assert.rejects(() => {
        return httpClient.get({
          url: '/test'
        });
      }, (err) => {
        Assert.equal(err.name, 'DVSAPIError');
        Assert.equal(err.status, 429);
        Assert.equal(err.data.errors[0].code, 1);
        Assert.equal(err.data.errors[0].message, 'test');
        return true;
      });
    });

    it('should handle timeout', async () => {
      const baseUrl = 'https://example.com',
        httpClient = new HTTPClient({
          baseUrl,
          apiKey: 'test',
          apiSecret: 'test',
          apiTimeout: 1000
        });

      Nock(baseUrl)
      .get('/test')
      .delayConnection(5000)
      .reply(200);

      await Assert.rejects(() => {
        return httpClient.get({
          url: '/test'
        });
      }, (err) => {
        Assert.equal(err.name, 'Error');
        Assert(err.message.includes('timeout'));
        return true;
      });
    });
  });

  describe('Method post', () => {
    it('should parse api success response', async () => {
      const baseUrl = 'https://example.com',
        httpClient = new HTTPClient({
          baseUrl,
          apiKey: 'test',
          apiSecret: 'test',
          apiTimeout: 5000
        }),
        body = {
          test: 'test'
        },
        headers = {
          date: new Date().toISOString(),
          'x-page': '1',
          'x-per-page': '10',
          'x-rateLimit-limit': '20',
          'x-rateLimit-remaining': '19',
          'x-total': '100',
          'x-total-pages': '10'
        };

      Nock(baseUrl)
      .post('/test')
      .reply(200, body, headers);

      let result;

      try {
        result = await httpClient.post({
          url: '/test'
        });
      } catch (err) {
        Assert.fail('Unexpected error');
      }

      Assert.equal(result.data.test, body.test);
      Assert.equal(result.metaData.date, headers.date);
      Assert.equal(result.metaData.page, 1);
      Assert.equal(result.metaData.perPage, 10);
      Assert.equal(result.metaData.rateLimit, 20);
      Assert.equal(result.metaData.rateLimitRemaining, 19);
      Assert.equal(result.metaData.total, 100);
      Assert.equal(result.metaData.totalPages, 10);
    });

    it('should pass params properly', async () => {
      const baseUrl = 'https://example.com',
        httpClient = new HTTPClient({
          baseUrl,
          apiKey: 'test',
          apiSecret: 'test',
          apiTimeout: 5000
        }),
        params = {
          testParams1: 'testParams1',
          testParams2: 'testParams2'
        },
        headers = {
          date: new Date().toISOString(),
          'x-page': '1',
          'x-per-page': '10',
          'x-rateLimit-limit': '20',
          'x-rateLimit-remaining': '19',
          'x-total': '100',
          'x-total-pages': '10'
        };

      Nock(baseUrl)
      .post('/test')
      .query({
        test_params1: 'testParams1',
        test_params2: 'testParams2'
      })
      .reply((uri, requestBody) => {
        const body = {};
        new URLSearchParams(uri.slice(uri.indexOf('?') + 1))
        .forEach((v, k) => {
          body[k] = v;
        });
        return [200, body, headers];
      });

      let result;

      try {
        result = await httpClient.post({
          params,
          url: '/test'
        });
      } catch (err) {
        Assert.fail('Unexpected error');
      }

      Assert.equal(result.data.testParams1, params.testParams1);
      Assert.equal(result.data.testParams2, params.testParams2);
      Assert.equal(result.metaData.date, headers.date);
      Assert.equal(result.metaData.page, 1);
      Assert.equal(result.metaData.perPage, 10);
      Assert.equal(result.metaData.rateLimit, 20);
      Assert.equal(result.metaData.rateLimitRemaining, 19);
      Assert.equal(result.metaData.total, 100);
      Assert.equal(result.metaData.totalPages, 10);
    });

    it('should pass data properly', async () => {
      const baseUrl = 'https://example.com',
        httpClient = new HTTPClient({
          baseUrl,
          apiKey: 'test',
          apiSecret: 'test',
          apiTimeout: 5000
        }),
        data = {
          testData1: 'testData1',
          testData2: 'testData2'
        },
        headers = {
          date: new Date().toISOString(),
          'x-page': '1',
          'x-per-page': '10',
          'x-rateLimit-limit': '20',
          'x-rateLimit-remaining': '19',
          'x-total': '100',
          'x-total-pages': '10'
        };

      Nock(baseUrl)
      .post('/test')
      .reply((uri, requestBody) => {
        return [200, requestBody, headers];
      });

      let result;

      try {
        result = await httpClient.post({
          data,
          url: '/test'
        });
      } catch (err) {
        Assert.fail('Unexpected error');
      }

      Assert.equal(result.data.testParams1, data.testParams1);
      Assert.equal(result.data.testParams2, data.testParams2);
      Assert.equal(result.metaData.date, headers.date);
      Assert.equal(result.metaData.page, 1);
      Assert.equal(result.metaData.perPage, 10);
      Assert.equal(result.metaData.rateLimit, 20);
      Assert.equal(result.metaData.rateLimitRemaining, 19);
      Assert.equal(result.metaData.total, 100);
      Assert.equal(result.metaData.totalPages, 10);
    });
  });
});
