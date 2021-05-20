'use strict';

/**
 *
 */
exports.DVSAPIError = class DVSAPIError extends Error {
  constructor ({status, statusText, data}) {
    super(`${status} - ${statusText}`);

    this.name = this.constructor.name;
    this.status = status;
    this.statusText = statusText;
    this.data = data;
  }
}
