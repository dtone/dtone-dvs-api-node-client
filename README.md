# dvs-api

[[_TOC_]]

## Documentation
The documentation for DVS API can be found [here][apidocs]

## Install
```bash
> npm i @dtone/dvs
```

## Sample usage

### Initialization
```javascript
const { DVS } = require('@dtone/dvs');

const dvs = new DVS({
  apiKey: 'your-api-key-here',
  apiSecret: 'your-api-secret-here'
});
```

### Fetching all the pages of an API
```javascript
(async function () {
  // initial pageing params
  const params = { page: 1, perPage: 10 },

    // initialize the async iterable object
    it = dvs.discovery.countries.get({ params });

  try {
    for await (let data of it) {
      console.log(JSON.stringify(data));
    }
  } catch (err) {
    console.log(JSON.stringify(err));
  }
})();
```

### Error handling
```javascript
const { DVSAPIError } = require(@dtone/dvs');

try {
  const result = await dvs.discovery.countries.getByCountryIsoCode({ countryIsoCode: 'SGP' });
} catch (err) {
  if (err instanceof DVSAPIError) {
    console.log(err.status, err.statusText, err.data);
  }

  // other error like timeouts, network issues, wrong params etc
}
```

## API
Refer DVS API ([here][apidocs]) for full list of query params and data required.

**Note:** DVS API uses snakecase for query params and data keys. This library
accepts camelCased keys and converts them to snakecase before calling the API.

### DVS
```javascript
const dvs = new DVS(opts);
```

#### Options
```javascript
{
  apiKey: 'your-api-key-here', // required

  apiSecret: 'your-api-secret-here', // required

  // sepcifies the number of milliseconds after which the HTTP request times
  // out. Set 0 to disable timeout.
  apiTimeout: 60000, // default

  // the base url against which all the api functions are executed, it defaults
  // to prod env. Change this option to use this library against other
  // environments.
  baseUrl: 'https://dvs-api-dtone.com/v1' // default
}
```

### Balances
* [Get Balances][apidocsgetbalances] - `dvs.account.balances.get({ params }) => Async Iterable`

### Benefits Types
* [Get Benefit Types][apidocsgetbalances] - `dvs.discovery.benefitTypes.get({ params }) => Async Iterable`

### Countries
* [Get Countries][apidocsgetcountries] - `dvs.discovery.countries.get({ params }) => Async Iterable`
* [Get by Country ISO code][apidocsgetcountriesbyisocode] - dvs.discovery.countries.getByCountryIsoCode({ countryIsoCode: 'SGP' }) => Promise`

[apidocs]: https://dvs-api-doc.dtone.com
[apidocsgetbalances]: https://dvs-api-doc.dtone.com/#tag/Balances/paths/~1balances/get
[apidocsgetbenefits]: https://dvs-api-doc.dtone.com/#tag/Benefits/paths/~1benefit-types/get
[apidocsgetcountries]: https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries/get
[apidocsgetcountriesbyisocode: ]: https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries~1{country_iso_code}/get
