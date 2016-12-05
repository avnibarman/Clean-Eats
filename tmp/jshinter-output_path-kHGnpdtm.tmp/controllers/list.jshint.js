QUnit.module('JSHint | controllers/list.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/list.js should pass jshint.\ncontrollers/list.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/list.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
