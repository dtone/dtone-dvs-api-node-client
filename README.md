# dvs-api

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

## API Documentation
See [here][https://github.com/dtone/dtone-dvs-api-node-client/blob/main/api.md]

[apidocs]: https://dvs-api-doc.dtone.com
