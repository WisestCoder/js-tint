'use strict';

(function () {

  function handleOptions(options) {

    // 设置默认的opstions
    var defaultOption = {
      method: 'get',
      async: true
    };

    // 如果未设置options，则使用默认的options
    if(!options) {
      return defaultOption;
    }

    // 为未设置默认值的参数赋值
    for (var key in defaultOption) {
      if( typeof options[key] == 'undefined') {
        options[key] = defaultOption[key];
      }
    }

    return options;
  }

  // 处理get请求的url拼接参数
  function urlParam(url, name, value) {
    url += (url.indexOf('?') == -1 ) ? '?' : '&' ;
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
  }

  // 格式化post 传递的数据
  function postDataFormat(obj){
    if(typeof obj != "object" ) {
      alert("输入的参数必须是对象");
      return;
    }

    // 支持有FormData的浏览器（Firefox 4+ , Safari 5+, Chrome和Android 3+版的Webkit）
    if(typeof FormData == "function") {
      var data = new FormData();
      for(var attr in obj) {
          data.append(attr,obj[attr]);
      }
      return data;
    } else {
      // 不支持FormData的浏览器的处理
      var arr = new Array();
      var i = 0;
      for(var attr in obj) {
        arr[i] = encodeURIComponent(attr) + "=" + encodeURIComponent(obj[attr]);
        i++;
      }
      return arr.join("&");
    }
  }

  function Response(responseText) {
    this.responseText = responseText;
    this.json = function() {
      this.responseText = JSON.parse(this.responseText);
      return Promise.resolve(this.responseText);
    }
    this.stringify = function() {
      this.responseText = JSON.stringify(this.responseText);
      return Promise.resolve(this.responseText);
    }
  }

  function getCallbackName(resolve) {
    var callbackName = Math.random().toString(36).substr(2,10);
    window[callbackName] = function(data) {
      delete window[callbackName];
      resolve(new Response(this.responseText));
    }
    return callbackName;
  }

  function jsonp(url, options) {
    if (options.params) {
      for(var key in options.params) {
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
    return new Promise(function(resolve, reject) {
      var callbackName = getCallbackName(resolve);
      if (url.indexOf('?') === -1) {
        script.src = url + '?callback=' + callbackName;
      } else {
        script.src = url + '&callback=' + callbackName;
      }
    })
  }

  module.exports = function(url, options) {
    var options = handleOptions(options);
    if (url == 'jsonp') {
      jsonp(url, options);
    }

    return new Promise(function(resolve, reject) {
      // 成功的时候，resolve结果； 失败的时候，reject错误信息

      //创建xhr对象,兼容IE
      var xhr;
      var params = postDataFormat(options.params);
      if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      }

      xhr.onerror = function() {
        reject(new TypeError('Request failed'));
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Request failed because of timeout!'));
      }

      xhr.onload = function() {
        resolve(new Response(this.responseText));
      }

      if(options.method == 'url') {
        // get请求添加查询参数
        if (options.params) {
          for(var key in options.params) {
            urlParam(url, key, options.params[key]);
          }
        }
        // 同时params应该不传
        params = null;
      }

      xhr.open(options.method, url, options.async);

      xhr.send(params);

    });
  }

}).call(this);
