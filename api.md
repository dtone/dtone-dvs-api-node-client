## Modules

<dl>
<dt><a href="#module_dvs">dvs</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#DVS">DVS</a></dt>
<dd><p>The DVS class provides all the functions to interact with DVS API</p>
</dd>
<dt><a href="#DVSAPIError">DVSAPIError</a></dt>
<dd><p>The DVSAPIError class wraps the error returned by the DVS API</p>
</dd>
<dt><a href="#DVSAPIResponseMetaData">DVSAPIResponseMetaData</a></dt>
<dd><p>The DVS API response meta data</p>
</dd>
<dt><a href="#DVSAPIResponse">DVSAPIResponse</a></dt>
<dd><p>The API repsonse object that is returned on successful API exection.</p>
</dd>
<dt><a href="#Balances">Balances</a></dt>
<dd><p>The Balances class has all the functions DVS API provides related to
balance.</p>
</dd>
<dt><a href="#Account">Account</a></dt>
<dd><p>The Account class has all the functions DVS API provides related to an
account.</p>
</dd>
<dt><a href="#BenefitTypes">BenefitTypes</a></dt>
<dd><p>The BenefitTypes class has all the functions DVS API provides related to
benefits.</p>
</dd>
<dt><a href="#Countries">Countries</a></dt>
<dd><p>The Countries class has all the functions DVS API provides related to
countries.</p>
</dd>
<dt><a href="#Discovery">Discovery</a></dt>
<dd><p>The Discovery class has all the functions DVS API provides related to
discovery</p>
</dd>
<dt><a href="#Operators">Operators</a></dt>
<dd><p>The Operators class has all the functions DVS API provides related to
operators.</p>
</dd>
<dt><a href="#Products">Products</a></dt>
<dd><p>The Products class has all the functions DVS API provides related to
products.</p>
</dd>
<dt><a href="#Promotions">Promotions</a></dt>
<dd><p>The Promotions class has all the functions DVS API provides related to
promotions.</p>
</dd>
<dt><a href="#Services">Services</a></dt>
<dd><p>The Services class has all the functions DVS API provides related to
services.</p>
</dd>
<dt><a href="#Lookup">Lookup</a></dt>
<dd></dd>
<dt><a href="#MobileNumber">MobileNumber</a></dt>
<dd></dd>
<dt><a href="#Async">Async</a></dt>
<dd></dd>
<dt><a href="#Transactions">Transactions</a></dt>
<dd></dd>
<dt><a href="#Sync">Sync</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AsyncIterator<T>">AsyncIterator<T></a></dt>
<dd><p>An async iteratable object</p>
</dd>
</dl>

<a name="module_dvs"></a>

## dvs

* [dvs](#module_dvs)
    * [.DVSAPIError](#module_dvs.DVSAPIError) : [<code>DVSAPIError</code>](#DVSAPIError)
    * [.DVS](#module_dvs.DVS) : [<code>DVS</code>](#DVS)

<a name="module_dvs.DVSAPIError"></a>

### dvs.DVSAPIError : [<code>DVSAPIError</code>](#DVSAPIError)
**Kind**: static property of [<code>dvs</code>](#module_dvs)  
<a name="module_dvs.DVS"></a>

### dvs.DVS : [<code>DVS</code>](#DVS)
**Kind**: static property of [<code>dvs</code>](#module_dvs)  
<a name="DVS"></a>

## DVS
The DVS class provides all the functions to interact with DVS API

**Kind**: global class  

* [DVS](#DVS)
    * [new DVS(options)](#new_DVS_new)
    * [.account](#DVS+account) : [<code>Account</code>](#Account)
    * [.discovery](#DVS+discovery) : [<code>Discovery</code>](#Discovery)
    * [.lookup](#DVS+lookup) : [<code>Lookup</code>](#Lookup)
    * [.transactions](#DVS+transactions) : [<code>Transactions</code>](#Transactions)

<a name="new_DVS_new"></a>

### new DVS(options)
Create a DVS instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | The configuration options. |
| [options.apiKey] | <code>string</code> |  | The api key for DVS API. |
| [options.apiSecret] | <code>string</code> |  | The api secret for DVS API. |
| [options.apiTimeout] | <code>number</code> | <code>60000</code> | Specifies the number of milliseconds after which the HTTP request times out. Set 0 to disable timeout. |
| [options.baseUrl] | <code>baseUrl</code> | <code>https://dvs-api.dtone.com/v1</code> | The base url against which all the api functions are executed. Change this to use this library against other environments. |

**Example**  
```js
const dvs = new DVS({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret'
});
```
<a name="DVS+account"></a>

### dvs.account : [<code>Account</code>](#Account)
**Kind**: instance property of [<code>DVS</code>](#DVS)  
<a name="DVS+discovery"></a>

### dvs.discovery : [<code>Discovery</code>](#Discovery)
**Kind**: instance property of [<code>DVS</code>](#DVS)  
<a name="DVS+lookup"></a>

### dvs.lookup : [<code>Lookup</code>](#Lookup)
**Kind**: instance property of [<code>DVS</code>](#DVS)  
<a name="DVS+transactions"></a>

### dvs.transactions : [<code>Transactions</code>](#Transactions)
**Kind**: instance property of [<code>DVS</code>](#DVS)  
<a name="DVSAPIError"></a>

## DVSAPIError
The DVSAPIError class wraps the error returned by the DVS API

**Kind**: global class  
<a name="DVSAPIResponseMetaData"></a>

## DVSAPIResponseMetaData
The DVS API response meta data

**Kind**: global class  

* [DVSAPIResponseMetaData](#DVSAPIResponseMetaData)
    * [.date](#DVSAPIResponseMetaData+date) : <code>string</code>
    * [.page](#DVSAPIResponseMetaData+page) : <code>number</code>
    * [.perPage](#DVSAPIResponseMetaData+perPage) : <code>number</code>
    * [.rateLimit](#DVSAPIResponseMetaData+rateLimit) : <code>number</code>
    * [.rateLimitRemaining](#DVSAPIResponseMetaData+rateLimitRemaining) : <code>number</code>
    * [.total](#DVSAPIResponseMetaData+total) : <code>number</code>
    * [.totalPages](#DVSAPIResponseMetaData+totalPages) : <code>number</code>

<a name="DVSAPIResponseMetaData+date"></a>

### dvsapiResponseMetaData.date : <code>string</code>
The API response date as ISO string.

**Kind**: instance property of [<code>DVSAPIResponseMetaData</code>](#DVSAPIResponseMetaData)  
<a name="DVSAPIResponseMetaData+page"></a>

### dvsapiResponseMetaData.page : <code>number</code>
The page number in the result set.

**Kind**: instance property of [<code>DVSAPIResponseMetaData</code>](#DVSAPIResponseMetaData)  
<a name="DVSAPIResponseMetaData+perPage"></a>

### dvsapiResponseMetaData.perPage : <code>number</code>
The number of items per page.

**Kind**: instance property of [<code>DVSAPIResponseMetaData</code>](#DVSAPIResponseMetaData)  
<a name="DVSAPIResponseMetaData+rateLimit"></a>

### dvsapiResponseMetaData.rateLimit : <code>number</code>
The rate limit

**Kind**: instance property of [<code>DVSAPIResponseMetaData</code>](#DVSAPIResponseMetaData)  
<a name="DVSAPIResponseMetaData+rateLimitRemaining"></a>

### dvsapiResponseMetaData.rateLimitRemaining : <code>number</code>
The un-used rate limite

**Kind**: instance property of [<code>DVSAPIResponseMetaData</code>](#DVSAPIResponseMetaData)  
<a name="DVSAPIResponseMetaData+total"></a>

### dvsapiResponseMetaData.total : <code>number</code>
The total number of items in the result.

**Kind**: instance property of [<code>DVSAPIResponseMetaData</code>](#DVSAPIResponseMetaData)  
<a name="DVSAPIResponseMetaData+totalPages"></a>

### dvsapiResponseMetaData.totalPages : <code>number</code>
The total pages in the result

**Kind**: instance property of [<code>DVSAPIResponseMetaData</code>](#DVSAPIResponseMetaData)  
<a name="DVSAPIResponse"></a>

## DVSAPIResponse
The API repsonse object that is returned on successful API exection.

**Kind**: global class  

* [DVSAPIResponse](#DVSAPIResponse)
    * [.metaData](#DVSAPIResponse+metaData) : [<code>DVSAPIResponseMetaData</code>](#DVSAPIResponseMetaData)
    * [.data](#DVSAPIResponse+data)

<a name="DVSAPIResponse+metaData"></a>

### dvsapiResponse.metaData : [<code>DVSAPIResponseMetaData</code>](#DVSAPIResponseMetaData)
**Kind**: instance property of [<code>DVSAPIResponse</code>](#DVSAPIResponse)  
<a name="DVSAPIResponse+data"></a>

### dvsapiResponse.data
The DVS API response body.

**Kind**: instance property of [<code>DVSAPIResponse</code>](#DVSAPIResponse)  
<a name="Balances"></a>

## Balances
The Balances class has all the functions DVS API provides related to
balance.

**Kind**: global class  
**Link**: https://dvs-api-doc.dtone.com/#tag/Balances  
<a name="Balances+get"></a>

### balances.get(options) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get all the balances.

**Kind**: instance method of [<code>Balances</code>](#Balances)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Balances/paths/~1balances/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.params] | <code>Object</code> | The query params for the API. |

<a name="Account"></a>

## Account
The Account class has all the functions DVS API provides related to an
account.

**Kind**: global class  
<a name="Account+balances"></a>

### account.balances : [<code>Balances</code>](#Balances)
**Kind**: instance property of [<code>Account</code>](#Account)  
<a name="BenefitTypes"></a>

## BenefitTypes
The BenefitTypes class has all the functions DVS API provides related to
benefits.

**Kind**: global class  
**Link**: https://dvs-api-doc.dtone.com/#tag/Benefits  
<a name="BenefitTypes+get"></a>

### benefitTypes.get(options) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get all the benefit types.

**Kind**: instance method of [<code>BenefitTypes</code>](#BenefitTypes)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Benefits/paths/~1benefit-types/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.params] | <code>Object</code> | The query params for the API. |

<a name="Countries"></a>

## Countries
The Countries class has all the functions DVS API provides related to
countries.

**Kind**: global class  
**Link**: https://dvs-api-doc.dtone.com/#tag/Countries  

* [Countries](#Countries)
    * [.get(options)](#Countries+get) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
    * [.getByCountryIsoCode(options)](#Countries+getByCountryIsoCode) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)

<a name="Countries+get"></a>

### countries.get(options) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get all the countries.

**Kind**: instance method of [<code>Countries</code>](#Countries)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.params] | <code>Object</code> | The query params for the API. |

<a name="Countries+getByCountryIsoCode"></a>

### countries.getByCountryIsoCode(options) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get a country by its ISO code.

**Kind**: instance method of [<code>Countries</code>](#Countries)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Countries/paths/~1countries~1{country_iso_code}/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.countryIsoCode] | <code>string</code> | The country ISO code. |

<a name="Discovery"></a>

## Discovery
The Discovery class has all the functions DVS API provides related to
discovery

**Kind**: global class  

* [Discovery](#Discovery)
    * [.benefitTypes](#Discovery+benefitTypes) : [<code>BenefitTypes</code>](#BenefitTypes)
    * [.countries](#Discovery+countries) : [<code>Countries</code>](#Countries)
    * [.operators](#Discovery+operators) : [<code>Operators</code>](#Operators)
    * [.products](#Discovery+products) : [<code>Products</code>](#Products)
    * [.promotions](#Discovery+promotions) : [<code>Promotions</code>](#Promotions)
    * [.services](#Discovery+services) : [<code>Services</code>](#Services)

<a name="Discovery+benefitTypes"></a>

### discovery.benefitTypes : [<code>BenefitTypes</code>](#BenefitTypes)
**Kind**: instance property of [<code>Discovery</code>](#Discovery)  
<a name="Discovery+countries"></a>

### discovery.countries : [<code>Countries</code>](#Countries)
**Kind**: instance property of [<code>Discovery</code>](#Discovery)  
<a name="Discovery+operators"></a>

### discovery.operators : [<code>Operators</code>](#Operators)
**Kind**: instance property of [<code>Discovery</code>](#Discovery)  
<a name="Discovery+products"></a>

### discovery.products : [<code>Products</code>](#Products)
**Kind**: instance property of [<code>Discovery</code>](#Discovery)  
<a name="Discovery+promotions"></a>

### discovery.promotions : [<code>Promotions</code>](#Promotions)
**Kind**: instance property of [<code>Discovery</code>](#Discovery)  
<a name="Discovery+services"></a>

### discovery.services : [<code>Services</code>](#Services)
**Kind**: instance property of [<code>Discovery</code>](#Discovery)  
<a name="Operators"></a>

## Operators
The Operators class has all the functions DVS API provides related to
operators.

**Kind**: global class  
**Link**: https://dvs-api-doc.dtone.com/#tag/Operators  

* [Operators](#Operators)
    * [.get(options)](#Operators+get) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
    * [.getByOperatorId(options)](#Operators+getByOperatorId) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)

<a name="Operators+get"></a>

### operators.get(options) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get all the operators.

**Kind**: instance method of [<code>Operators</code>](#Operators)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Operators/paths/~1operators/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.params] | <code>Object</code> | The query params for the API. |

<a name="Operators+getByOperatorId"></a>

### operators.getByOperatorId(options) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get an operator by its ID.

**Kind**: instance method of [<code>Operators</code>](#Operators)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Operators/paths/~1operators~1{operator_id}/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.operatorId] | <code>number</code> | The operator ID. |

<a name="Products"></a>

## Products
The Products class has all the functions DVS API provides related to
products.

**Kind**: global class  
**Link**: https://dvs-api-doc.dtone.com/#tag/Products  

* [Products](#Products)
    * [.get(options)](#Products+get) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
    * [.getByProductId(options)](#Products+getByProductId) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)

<a name="Products+get"></a>

### products.get(options) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get all the products.

**Kind**: instance method of [<code>Products</code>](#Products)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Products/paths/~1products/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.params] | <code>Object</code> | The query params for the API. |

<a name="Products+getByProductId"></a>

### products.getByProductId(options) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get a product by its ID.

**Kind**: instance method of [<code>Products</code>](#Products)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Products/paths/~1products~1{product_id}/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.productId] | <code>number</code> | The product ID. |

<a name="Promotions"></a>

## Promotions
The Promotions class has all the functions DVS API provides related to
promotions.

**Kind**: global class  
**Link**: https://dvs-api-doc.dtone.com/#tag/Promotions  

* [Promotions](#Promotions)
    * [.get(options)](#Promotions+get) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
    * [.getByPromotionId(options)](#Promotions+getByPromotionId) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)

<a name="Promotions+get"></a>

### promotions.get(options) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get all the promotions.

**Kind**: instance method of [<code>Promotions</code>](#Promotions)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Promotions/paths/~1promotions/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.params] | <code>Object</code> | The query params for the API. |

<a name="Promotions+getByPromotionId"></a>

### promotions.getByPromotionId(options) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get a promotion by its ID.

**Kind**: instance method of [<code>Promotions</code>](#Promotions)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Promotions/paths/~1promotions~1{promotion_id}/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.operatorId] | <code>number</code> | The promotion ID. |

<a name="Services"></a>

## Services
The Services class has all the functions DVS API provides related to
services.

**Kind**: global class  
**Link**: https://dvs-api-doc.dtone.com/#tag/Services  

* [Services](#Services)
    * [.get(options)](#Services+get) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
    * [.getByServiceId(options)](#Services+getByServiceId) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)

<a name="Services+get"></a>

### services.get(options) ⇒ [<code>AsyncIterator.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get all the services.

**Kind**: instance method of [<code>Services</code>](#Services)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Services/paths/~1services/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.params] | <code>Object</code> | The query params for the API. |

<a name="Services+getByServiceId"></a>

### services.getByServiceId(options) ⇒ [<code>Promise.&lt;DVSAPIResponse&gt;</code>](#DVSAPIResponse)
Get a service by its ID.

**Kind**: instance method of [<code>Services</code>](#Services)  
**Link**: https://dvs-api-doc.dtone.com/#tag/Services/paths/~1services~1{service_id}/get  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The parameters to provider the API. |
| [options.operatorId] | <code>number</code> | The service ID. |

<a name="AsyncIterator<T>"></a>

## AsyncIterator<T>
An async iteratable object

**Kind**: global typedef  
**See**

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)

**Example**  
```js
const it = dvs.account.balances.get({page: 1, perPage: 10});
for await(let data of it) {
  console.log(data);
}
```
