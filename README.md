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

### [Balances][apidocsbalances]

#### Get Balances
```javascript
const it = dvs.account.balances.get({ params });

for await (let data of it) {
  console.log(data);
}
```

### [Benefits Types][apidocsbenefits]

#### Get Benefit Types
```javascript
const it = dvs.discovery.benefitTypes.get({ params });

for await (let data of it) {
  console.log(data);
}
```

### [Countries][apidocscountries]

#### Get Countries
```javascript
const it = dvs.discovery.countries.get({ params });

for await (let data of it) {
  console.log(data);
}
```

#### Get by Country ISO code
```javascript
const result = await dvs.discovery.countries.getByCountryIsoCode({ countryIsoCode: 'SGP' });
```

[apidocs]: https://dvs-api-doc.dtone.com
[apidocsbalances]: https://dvs-api-doc.dtone.com/#tag/Balances
[apidocsbenefits]: https://dvs-api-doc.dtone.com/#tag/Benefits
[apidocscountries]: https://dvs-api-doc.dtone.com/#tag/Countries
