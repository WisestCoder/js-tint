'use strict';

(function () {

  exports.randomString = function(length, charSet) {
    var result = [];
    length = length || 16;
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    while (length--) {
      result.push(charSet[Math.floor(Math.random() * charSet.length)]);
    }
    return result.join('');
  };

  exports.addSpaceStr = function(total, str) {
    var str = str || "";
    var spaceStr = '';
    var len = total - str.length;
    while(len){
      spaceStr += ' ';
      len --;
    }
    return spaceStr;
  }

  exports.isString = function(s) {
    return Object.prototype.toString.call(s) === '[object String]';
  }

  exports.isEmail = function(value) {
    return /^[-_A-Za-z0-9.]+@([-_A-Za-z0-9]+\.)+[A-Za-z0-9]+$/.test(value);
  }

  exports.isMobile = function(value) {
    return /^[1][0-9]{10}$/.test(value);
  }

  exports.isChinese = function(value) {
    return /^[\u4e00-\u9fa5]+$/.test(value);
  }

}).call(this);
