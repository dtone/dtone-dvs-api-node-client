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

[apidocs]: https://dvs-api-doc.dtone.com
