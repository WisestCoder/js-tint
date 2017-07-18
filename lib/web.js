'use strict';

(function () {

  exports.getQueryString = function (key, url) {
    var rUrl;
    if(url) {
      rUrl = url;
    } else {
      rUrl = window.location.search.substr(1);
    }
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
    var r = rUrl.match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
  };

}).call(this);
