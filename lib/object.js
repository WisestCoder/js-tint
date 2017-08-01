'use strict';

(function () {

  exports.isObject = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  exports.has = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  exports.deepCopy = function deepCopy(obj) {
    if ( typeof obj === "boolean" ) {
  		return obj;
    }
    if ( typeof obj === "number" ) {
  		return obj;
    }
    if ( typeof obj === "string" ) {
  		return obj;
    }
    var c;
    if (obj) {
      if (obj.constructor === Array) {
        c = [];
      }
      if (obj.constructor === Object) {
        c = {};
      }
    }
    for (var i in obj) {
      if (typeof obj[i] === 'object') {
   	  //要考虑深复制问题了
        if (obj[i].constructor === Array) {
        	//这是数组
        	c[i] = [];
        } else {
        	//这是对象
        	c[i] = {};
        }
        c[i] = deepCopy(obj[i]);
     } else {
     	 c[i] = obj[i];
     }
	  }
    return c;
  }

}).call(this);
