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
    console.log(JSON.stringify(err.data));
  }
})();
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

### [Benefits][apidocsbenefits]
```javascript
const it = dvs.discovery.benefitTypes.get({ params });

for await (let data of it) {
  console.log(data);
}
```

[apidocs]: https://dvs-api-doc.dtone.com
[apidocsbalances]: https://dvs-api-doc.dtone.com/#tag/Balances
[apidocsbenefits]: https://dvs-api-doc.dtone.com/#tag/Benefits
