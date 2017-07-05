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
  }

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
  }

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


}).call(this);
