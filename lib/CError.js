'use strict';

let chalk = require('chalk');

class CError extends Error {
  /**
   @param {*} [code]
   @param {*} [message]
   @param {*} [data]
   @constructor
   */
  constructor(code, message, data) {
    let str = code != undefined && code != '' ? chalk.grey.bgRed.dim(code) : '';
    str += (message ? ' > ' + chalk.red(message) : '' );
    str += (data ? ' ' + chalk.yellow(JSON.stringify(data)) : '');
    super(str);
    this.code = code;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CError;