QUnit.module('JSHint | controllers/search.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/search.js should pass jshint.\ncontrollers/search.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/search.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/search.js: line 8, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/search.js: line 24, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/search.js: line 29, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
});
