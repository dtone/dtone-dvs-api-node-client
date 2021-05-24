/**
 * @author Jose Nidhin
 */
'use strict';

const Assert = require('assert').strict,
  Nock = require('nock'),

  { HTTPClient } = require('../lib/http_client');

describe('lib/http_client', () => {
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

  it('should "get" and parse api success response', async () => {
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

  it('should "get" and parse api error repsonse', async () => {
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

  it('should "get" and handle timeout', async () => {
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
