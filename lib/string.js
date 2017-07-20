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

}).call(this);
