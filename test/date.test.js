var expect = require('chai').expect;
var assert = require("assert");
var date = require('../lib/date.js');

describe('日期函数的测试', function() {
  it('格式为：YYYYMMDD', function() {
    expect(date.YYYYMMDD()).to.be.equal('2017-07-18');
  });

  it('格式为：YYYYMMDDHHmmss', function() {
    expect(date.YYYYMMDDHHmmss()).to.be.not.equal('2017-07-18');
  });

  it('timestamp', function() {
    expect(date.timestamp()).to.be.equal(Math.round(Date.now() / 1000));
  });
});
