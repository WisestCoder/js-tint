'use strict';

var object = require('../lib/object.js');

console.log(object);
console.log('-------------------------------------------------------------');

console.log(object.has({ a: 1, b: 2 }, 'a'));
console.log(object.has({ a: 1, b: 2 }, 'c'));
console.log('-------------------------------------------------------------');

console.log(object.deepCopy({ a: 1, b: 2, c: { a: 1, c: [{ a: 1, b: 2 }, { a: 3 }] } }));
console.log('-------------------------------------------------------------');
