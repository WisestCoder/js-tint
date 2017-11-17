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

  exports.deepFormat = function(originalObj, obj) {
    if (typeof originalObj === 'undefined') {
      return undefined;
    }
    if (typeof originalObj === 'boolean' && typeof obj === 'boolean') {
      return obj;
    }
    if (typeof originalObj === 'number' && typeof obj === 'number') {
      return obj;
    }
    if (typeof originalObj === 'string' && typeof obj === 'string') {
      return obj;
    }
    if (typeof originalObj === 'object' && typeof obj !== 'object') {
      return originalObj;
    }
    if (originalObj.constructor !== obj.constructor) {
      return originalObj;
    }
    var c = '';
    if (originalObj) {
      if (originalObj.constructor === Array) {
        c = [];
      }
      if (originalObj.constructor === Object) {
        c = {};
      }
    }
    if (Object.keys(originalObj).length === 0) {
      return obj;
    }
    for (var in originalObj) {
      if (typeof obj[i] === 'undefined') {
        c[i] = originalObj[i];
      } else {
        if (typeof originalObj[i] === 'object') {
        // 要考虑深度问题了
          if (originalObj[i].constructor === Array) {
            // 这是数组
            c[i] = [];
          } else {
            // 这是对象
            c[i] = {};
          }
          c[i] = deepFormat(originalObj[i], obj[i]);
        } else {
          c[i] = obj[i];
        }
      }
    }
    return c;
  };

}).call(this);
