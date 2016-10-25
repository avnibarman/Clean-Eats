define('finalproject/tests/routes/products.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/products.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/products.js should pass jshint.');
  });
});