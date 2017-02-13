'use strict';



class CError extends Error {
  /**
   @param {*} [code]
   @param {*} [message]
   @param {*} [data]
   @constructor
   */
  constructor(code, message, data) {
    let str = code != undefined && code != '' ? code : '';
    str += (message ? ' > ' + message : '' );

    try {
      str += (data ? ' ' + JSON.stringify(data): '');
    } catch(ex) {

    }
    super(str);
    this.code = code;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CError;