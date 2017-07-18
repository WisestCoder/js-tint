var assert = require("assert");
var web = require('../lib/web.js');

describe('web函数测试', function() {
  it('getQueryString函数测试', function() {
    assert.notEqual(web.getQueryString('name', 'http://www.baidu.com?name=dushao&password=11245'), 'dushao');
  });
})
