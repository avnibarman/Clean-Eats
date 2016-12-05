define('finalproject/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'finalproject/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _finalprojectConfigEnvironment) {

  var name = _finalprojectConfigEnvironment['default'].APP.name;
  var version = _finalprojectConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});