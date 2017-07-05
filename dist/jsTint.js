/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  date: __webpack_require__(1),
	  object: __webpack_require__(2),
	  string: __webpack_require__(3),
	  web: __webpack_require__(4)
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	
	  exports.YYYYMMDD = function (d, dateSep) {
	    if (typeof d === 'string') {
	      // YYYYMMDD(sep)
	      sep = d;
	      d = new Date();
	    } else {
	      // YYYYMMDD(d, sep)
	      d = d || new Date();
	      if (!(d instanceof Date)) {
	        d = new Date(d);
	      }
	      if (typeof sep !== 'string') {
	        sep = '-';
	      }
	    }
	    var date = d.getDate();
	    if (date < 10) {
	      date = '0' + date;
	    }
	    var month = d.getMonth() + 1;
	    if (month < 10) {
	      month = '0' + month;
	    }
	    return d.getFullYear() + sep + month + sep + date;
	  };
	
	  exports.YYYYMMDDHHmmss = function (d, options) {
	    var d = d || new Date();
	    if (!(d instanceof Date)) {
	      d = new Date(d);
	    }
	    var dateSep = '-';
	    var timeSep = ':';
	    if (options) {
	      if (options.dateSep) {
	        dateSep = options.dateSep;
	      }
	      if (options.timeSep) {
	        timeSep = options.timeSep;
	      }
	    }
	    var date = d.getDate();
	    if (date < 10) {
	      date = '0' + date;
	    }
	    var month = d.getMonth() + 1;
	    if (month < 10) {
	      month = '0' + month;
	    }
	    var hours = d.getHours();
	    if (hours < 10) {
	      hours = '0' + hours;
	    }
	    var mintues = d.getMinutes();
	    if (mintues < 10) {
	      mintues = '0' + mintues;
	    }
	    var seconds = d.getSeconds();
	    if (seconds < 10) {
	      seconds = '0' + seconds;
	    }
	    return d.getFullYear() + dateSep + month + dateSep + date + ' ' + hours + timeSep + mintues + timeSep + seconds;
	  };
	
	  exports.timestamp = function timestamp(t) {
	    if (t) {
	      var v = t;
	      if (typeof v === 'string') {
	        v = Number(v);
	      }
	      if (String(t).length === 10) {
	        v *= 1000;
	      }
	      return new Date(v);
	    }
	    return Math.round(Date.now() / 1000);
	  };
	}).call(undefined);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function () {
	
	  exports.has = function (obj, prop) {
	    return Object.prototype.hasOwnProperty.call(obj, prop);
	  };
	
	  exports.deepCopy = function deepCopy(obj) {
	    if (typeof obj === "boolean") {
	      return obj;
	    }
	    if (typeof obj === "number") {
	      return obj;
	    }
	    if (typeof obj === "string") {
	      return obj;
	    }
	    if (typeof obj === "string") {
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
	      if (_typeof(obj[i]) === 'object') {
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
	  };
	}).call(undefined);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	
	  exports.randomString = function randomString(length, charSet) {
	    var result = [];
	    length = length || 16;
	    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	
	    while (length--) {
	      result.push(charSet[Math.floor(Math.random() * charSet.length)]);
	    }
	    return result.join('');
	  };
	}).call(undefined);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	
	  exports.getQueryString = function (key) {
	    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	      return unescape(r[2]);
	    }
	    return null;
	  };
	}).call(undefined);

/***/ })
/******/ ]);
//# sourceMappingURL=jsTint.js.map