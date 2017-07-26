var expect = require('chai').expect;
var assert = require("assert");
var number = require('../lib/number.js');

describe('number函数的测试', function() {
  it('测试tofixed', function() {
    expect(number.tofixed(2.3254, 2)).to.be.equal('2.33');
  });
});
