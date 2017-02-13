let CError = require('../lib/CError');

let err1 = new CError('SOME_ERROR_CODE');
console.log(err1.code, err1.message, err1.data);

console.log('------');

let err2 = new CError('SOME_ERROR_CODE', 'With a message');
console.log(err2.code, err2.message, err2.data);

console.log('------');

let err3 = new CError('SOME_ERROR_CODE', 'With a message', { key: 'value' });
console.log(err3.code, err3.message, err3.data);