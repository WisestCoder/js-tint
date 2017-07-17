var date = require('../lib/date.js')
// var date = import('../lib/date.js');

console.log(date);
console.log('-------------------------------------------------------------');

console.log(date.YYYYMMDD());
console.log(date.YYYYMMDD('--'));
console.log('-------------------------------------------------------------');

console.log(date.YYYYMMDDHHmmss());
console.log(date.YYYYMMDDHHmmss(new Date(), {dateSep: '--', timeSep: '::'}));
console.log(date.YYYYMMDDHHmmss(1499261013994));
console.log('-------------------------------------------------------------');

console.log(date.timestamp());
