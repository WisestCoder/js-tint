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

}).call(this);
