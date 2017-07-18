var assert = require("assert");
var object = require('../lib/object.js');

describe('object函数测试', function() {
  it('has函数测试', function() {
    assert.equal(object.has({a: 1, b: 2, c: 3}, 'a'), true);
  });

  it('deepCopy函数测试', function() {
    assert.equal(object.deepCopy({a: 1, b: 2, c: {d:1, f:2}}), {a: 1, b: 2, c: {d:1, f:2}});
  })
})
