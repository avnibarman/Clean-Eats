QUnit.module('JSHint | controllers/search.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/search.js should pass jshint.\ncontrollers/search.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/search.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/search.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/search.js: line 38, col 23, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
});
