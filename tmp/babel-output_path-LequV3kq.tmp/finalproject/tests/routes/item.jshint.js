define('finalproject/tests/routes/item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/item.js should pass jshint.\nroutes/item.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/item.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});