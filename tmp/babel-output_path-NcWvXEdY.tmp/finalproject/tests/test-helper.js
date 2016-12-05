define('finalproject/tests/test-helper', ['exports', 'finalproject/tests/helpers/resolver', 'ember-qunit'], function (exports, _finalprojectTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_finalprojectTestsHelpersResolver['default']);
});