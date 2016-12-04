define('finalproject/tests/helpers/resolver', ['exports', 'finalproject/resolver', 'finalproject/config/environment'], function (exports, _finalprojectResolver, _finalprojectConfigEnvironment) {

  var resolver = _finalprojectResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _finalprojectConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _finalprojectConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});