define('finalproject/tests/helpers/start-app', ['exports', 'ember', 'finalproject/app', 'finalproject/config/environment'], function (exports, _ember, _finalprojectApp, _finalprojectConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _finalprojectConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _finalprojectApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});