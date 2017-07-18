var assert = require("assert");
var string = require('../lib/string.js');

describe('string函数测试', function() {
  it('randomString函数测试', function() {
    assert.notEqual(string.randomString(10), 'aaaaaaaaaa');
  });
})
