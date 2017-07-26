'use strict';

(function () {

  exports.tofixed = function(number, n) {
    if (n > 20 || n < 0) {
      throw new RangeError('toFixed() digits argument must be between 0 and 20');
    }

    var number = number;

    if (isNaN(number) || number >= Math.pow(10, 21)) {
      return number.toString();
    }
    if (typeof (n) == 'undefined' || n == 0) {
      return (Math.round(number)).toString();
    }

    var result = number.toString();
    var arr = result.split('.');

    if (arr.length < 2) {
      result += '.';
      for (var i = 0; i < n; i += 1) {
          result += '0';
      }
      return result;
    }

    var integer = arr[0];
    var decimal = arr[1];
    if (decimal.length == n) {
      return result;
    }
    if (decimal.length < n) {
      for (var i = 0; i < n - decimal.length; i += 1) {
        result += '0';
      }
      return result;
    }
    result = integer + '.' + decimal.substr(0, n);
    var last = decimal.substr(n, 1);

    if (parseInt(last, 10) >= 5) {
      var x = Math.pow(10, n);
      result = (Math.round((parseFloat(result) * x)) + 1) / x;
      result = result.toFixed(n);
    }

    return result;
  };

}).call(this);
