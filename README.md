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

### Benefits Types
* [Get Benefit Types][apidocsgetbalances] - `dvs.discovery.benefitTypes.get({ params }) => Async Iterable`

### Countries
* [Get Countries][apidocsgetcountries] - `dvs.discovery.countries.get({ params }) => Async Iterable`
* [Get by ISO code][apidocsgetcountriesbyisocode] - `dvs.discovery.countries.getByCountryIsoCode({ countryIsoCode: 'SGP' }) => Promise`

### Operators
* [Get Operators][apidocsgetoperators] - `dvs.discovery.operators.get({ params }) => Async Iterable`
* [Get by ID][apidocsgetoperatorsbyid] - `dvs.discovery.operators.getByOperatorId({ operatorId }) => Promise`

### Products
* [Get Products][apidocsgetproducts] - `dvs.discovery.products.get({ params }) => Async Iterable`
* [Get by ID][apidocsgetproductsbyid] - `dvs.discovery.products.getByProductId({ productId }) => Promise`

### Promotions
* [Get Promotions][apidocsgetpromotions] - `dvs.discovery.promotions.get({ params }) => Async Iterable`
* [Get by ID][apidocsgetpromotionsbyid] - `dvs.discovery.promotions.getByPromotionId({ promotionId }) => Promise`

### Services
* [Get Services][apidocsgetservices] - `dvs.discovery.services.get({ params }) => Async Iterable`
* [Get by ID][apidocsgetservicesbyid] - `dvs.discovery.services.getByServiceId({ serviceId}) => Promise`

### Transactions
* [Get Transactions][apidocsgettransactions] - `dvs.transactions.get({ params }) => Async Iterable`

### Balances
* [Get Balances][apidocsgetbalances] - `dvs.account.balances.get({ params }) => Async Iterable`

### Lookup
* [By Mobile Number][apidocslookupmobilenumber] - `dvs.lookup.mobileNumber.getByMobileNumber({ mobileNumber, params}) => Async Iterable`

[apidocs]: https://dvs-api-doc.dtone.com
[apidocsgetbenefits]: https://dvs-api-doc.dtone.com/#tag/Benefits/paths/~1benefit-types/get
[apidocsgetcountries]: https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries/get
[apidocsgetcountriesbyisocode: ]: https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries~1{country_iso_code}/get
[apidocsgetoperators]: https://dvs-api-doc.dtone.com/#tag/Operators/paths/~1operators/get
[apidocsgetoperatorsbyid]: https://dvs-api-doc.dtone.com/#tag/Operators/paths/~1operators~1{operator_id}/get
[apidocsgetproducts]: https://dvs-api-doc.dtone.com/#tag/Products/paths/~1products/get
[apidocsgetproductsbyid]: https://dvs-api-doc.dtone.com/#tag/Products/paths/~1products~1{product_id}/get
[apidocsgetpromotions]: https://dvs-api-doc.dtone.com/#tag/Promotions/paths/~1promotions/get
[apidocsgetpromotionsbyid]: https://dvs-api-doc.dtone.com/#tag/Promotions/paths/~1promotions~1{promotion_id}/get
[apidocsgetservices]: https://dvs-api-doc.dtone.com/#tag/Services/paths/~1services/get
[apidocsgetservicesbyid]: https://dvs-api-doc.dtone.com/#tag/Services/paths/~1services~1{service_id}/get
[apidocsgettransactions]: https://dvs-api-doc.dtone.com/#tag/Transactions/paths/~1transactions/get 
[apidocsge[tbalances]: https://dvs-api-doc.dtone.com/#tag/Balances/paths/~1balances/get
[apidocsgetbalances]: https://dvs-api-doc.dtone.com/#tag/Balances/paths/~1balances/get
[apidocslookupmobilenumber]: https://dvs-api-doc.dtone.com/#tag/Mobile-Number/paths/~1lookup~1mobile-number~1{mobile_number}/get
