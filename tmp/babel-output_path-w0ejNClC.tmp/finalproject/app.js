define('finalproject/app', ['exports', 'ember', 'finalproject/resolver', 'ember-load-initializers', 'finalproject/config/environment'], function (exports, _ember, _finalprojectResolver, _emberLoadInitializers, _finalprojectConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _finalprojectConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _finalprojectConfigEnvironment['default'].podModulePrefix,
    Resolver: _finalprojectResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _finalprojectConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});