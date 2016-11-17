define('finalproject/tests/routes/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/search.js should pass jshint.\nroutes/search.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/search.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/search.js: line 34, col 6, Expected \'}\' to match \'{\' from line 3 and instead saw \';\'.\nroutes/search.js: line 35, col 1, Expected \')\' and instead saw \'}\'.\nroutes/search.js: line 35, col 2, Missing semicolon.\nroutes/search.js: line 35, col 1, Unrecoverable syntax error. (92% scanned).\n\n7 errors');
  });
});