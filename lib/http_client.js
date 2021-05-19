'use strict';

let axios = require('axios'),
    joi = require('joi'),
  client = null;

exports.init = function (baseUrl) {
  axios.create({
    baseURL: baseUrl
  });
};

exports.get = async (endpoint, headers = {}) => {

  let promise = new Promise(resolve, reject) => {
    axios.get(endpoint, {
      headers: headers
    });
  }
  return
};

function getHeadersValidationSchema () {
  return joi.object({

  })
};
