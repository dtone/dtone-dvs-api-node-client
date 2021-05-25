# dvs-api

[[_TOC_]]

## Documentation
The documnetation for DVS API can be found [here][apidocs]

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
```javascrpt
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

[apidocs]: https://dvs-api-doc.dtone.com
