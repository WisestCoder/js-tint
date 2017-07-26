# [jsTint](https://github.com/dushao103500/js-tint)
[![NPM version](https://img.shields.io/npm/v/js-tint.svg?style=flat)](https://npmjs.org/package/js-tint)
[![npm](https://img.shields.io/npm/dt/js-tint.svg)](https://npmjs.org/package/js-tint)
[![GitHub stars](https://img.shields.io/github/stars/dushao103500/js-tint.svg?style=social&label=Star)](https://github.com/dushao103500/js-tint)
[![GitHub forks](https://img.shields.io/github/forks/dushao103500/js-tint.svg?style=social&label=Fork)](https://github.com/dushao103500/js-tint)

A tools to help you using javascript quickly and smoothly

----

## Feature

- Help you using javascript quickly and smoothly


## Install

- Install js-tint

```bash
$ npm i js-tint --save
```

## Usage
```bash
import { jsTint } from 'js-tint';
const { _date, _object, _string, _web, _fetch } = jsTint;
```

## API

- _date

```javascript
console.log(_date.YYYYMMDD());   =>   
console.log(_date.YYYYMMDD('-'));   =>   
console.log(_date.YYYYMMDD(new Date(), '-'))   =>   

console.log(_date.YYYYMMDDHHmmss());   =>   
console.log(_date.YYYYMMDDHHmmss(new Date(), {dateSep: '-', timeSep: ':'}));   =>   

console.log(_date.timestamp());   =>   
```

- _number

```javascript
console.log(_number.tofixed(2.3251, 2));   =>   2.33   
```

- _object

```javascript
console.log(_object.has({a: 1, b: 2}, 'a'));   =>   true
console.log(_object.deepCopy({a: 1, b: 2, c: {d: 1}, e: [1, 2, 3]}));   =>   {a: 1, b: 2, c: {d: 1}, e: [1, 2, 3]}
```

- _string

```javascript
console.log(_string.randomString());   =>   STUVWXYZabcdefgh
console.log(_string.randomString(10));   =>   STUYZabcfg
console.log(_string.randomString(3, 'STUVWXYZ'));   =>   SWX
```

- _web

```javascript
console.log(_web.getQueryString('name'));   =>   dushao103500
console.log(_web.getQueryString('name', 'http://www.baidu.com?name=dushao&password=12345'));   =>   dushao
```

- _fetch

```javascript
_fetch('http://abc.json', { method: 'get', params: { name: 'dushao' } })
  .then(function(response) { return response.json(); })
  .then( function(value) { console.log(value); })


```
