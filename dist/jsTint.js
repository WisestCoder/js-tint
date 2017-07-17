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
	  web: __webpack_require__(4),
	  fetch: __webpack_require__(5)
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	
	  var date = {};
	
	  exports.YYYYMMDD = function (d, sep) {
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function () {
	
	  function handleOptions(options) {
	
	    // 设置默认的opstions
	    var defaultOption = {
	      method: 'get',
	      async: true
	    };
	
	    // 如果未设置options，则使用默认的options
	    if (!options) {
	      return defaultOption;
	    }
	
	    // 为未设置默认值的参数赋值
	    for (var key in defaultOption) {
	      if (typeof options[key] == 'undefined') {
	        options[key] = defaultOption[key];
	      }
	    }
	
	    return options;
	  }
	
	  // 处理get请求的url拼接参数
	  function urlParam(url, name, value) {
	    url += url.indexOf('?') == -1 ? '?' : '&';
	    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
	    return url;
	  }
	
	  // 格式化post 传递的数据
	  function postDataFormat(obj) {
	    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) != "object") {
	      alert("输入的参数必须是对象");
	      return;
	    }
	
	    // 支持有FormData的浏览器（Firefox 4+ , Safari 5+, Chrome和Android 3+版的Webkit）
	    if (typeof FormData == "function") {
	      var data = new FormData();
	      for (var attr in obj) {
	        data.append(attr, obj[attr]);
	      }
	      return data;
	    } else {
	      // 不支持FormData的浏览器的处理
	      var arr = new Array();
	      var i = 0;
	      for (var attr in obj) {
	        arr[i] = encodeURIComponent(attr) + "=" + encodeURIComponent(obj[attr]);
	        i++;
	      }
	      return arr.join("&");
	    }
	  }
	
	  function Response(responseText) {
	    this.responseText = responseText;
	    this.json = function () {
	      this.responseText = JSON.parse(this.responseText);
	      return Promise.resolve(this.responseText);
	    };
	    this.stringify = function () {
	      this.responseText = JSON.stringify(this.responseText);
	      return Promise.resolve(this.responseText);
	    };
	  }
	
	  function getCallbackName(resolve) {
	    var callbackName = Math.random().toString(36).substr(2, 10);
	    window[callbackName] = function (data) {
	      delete window[callbackName];
	      resolve(new Response(this.responseText));
	    };
	    return callbackName;
	  }
	
	  function jsonp(url, options) {
	    if (options.params) {
	      for (var key in options.params) {
	        urlParam(url, key, options.params[key]);
	      }
	    }
	    var script = document.createElement('script');
	    script.async = true;
	    script.type = 'text/javascript';
	    script.onreadystatechange = script.onload = function onJsonpFinish() {
	      if (!script.readyState || /loaded|complete/i.test(script.readyState)) {
	        script.onreadystatechange = script.onload = null;
	        script.parentNode.removeChild(script);
	      }
	    };
	    document.body.append(script);
	    return new Promise(function (resolve, reject) {
	      var callbackName = getCallbackName(resolve);
	      if (url.indexOf('?') === -1) {
	        script.src = url + '?callback=' + callbackName;
	      } else {
	        script.src = url + '&callback=' + callbackName;
	      }
	    });
	  }
	
	  var fetch = function fetch(url, options) {
	    var options = handleOptions(options);
	    if (url == 'jsonp') {
	      jsonp(url, options);
	    }
	
	    return new Promise(function (resolve, reject) {
	      // 成功的时候，resolve结果； 失败的时候，reject错误信息
	
	      //创建xhr对象,兼容IE
	      var xhr;
	      var params = postDataFormat(options.params);
	      if (window.XMLHttpRequest) {
	        xhr = new XMLHttpRequest();
	      } else {
	        xhr = new ActiveXObject('Microsoft.XMLHTTP');
	      }
	
	      xhr.onerror = function () {
	        reject(new TypeError('Request failed'));
	      };
	
	      xhr.ontimeout = function () {
	        reject(new TypeError('Request failed because of timeout!'));
	      };
	
	      xhr.onload = function () {
	        resolve(new Response(this.responseText));
	      };
	
	      if (options.method == 'url') {
	        // get请求添加查询参数
	        if (options.params) {
	          for (var key in options.params) {
	            urlParam(url, key, options.params[key]);
	          }
	        }
	        // 同时params应该不传
	        params = null;
	      }
	
	      xhr.open(options.method, url, options.async);
	
	      xhr.send(params);
	    });
	  };
	}).call(undefined);

/***/ })
/******/ ]);
//# sourceMappingURL=jsTint.js.map