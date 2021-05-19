'use strict';
const dvsApi = require('../dvs_api');
// here goes the CLI to interact with the DVS API
// Select environment
// Enter API Key
// Enter API Secret
// Select section (discovery, transactions, account)
// Select action

dvsApi.init('92a3af1a-51db-5708-a43d-5103a8505dc2', '8d609310-4382-5258-988b-317fd139a550', 'preproduction');

// dvsApi.healthcheck();

// dvsApi.discovery.services.getServices()
// .then((result) => console.log(result))
// .catch((err) => console.log(err));
// console.log(dvsApi.discovery.services.getServiceById({id: 1}));

dvsApi.discovery.countries.getCountries({page:3})
.then((result) => console.log(result))
.catch((err) => console.log(err));
