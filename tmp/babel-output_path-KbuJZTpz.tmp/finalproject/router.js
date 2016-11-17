define('finalproject/router', ['exports', 'ember', 'finalproject/config/environment'], function (exports, _ember, _finalprojectConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _finalprojectConfigEnvironment['default'].locationType,
    rootURL: _finalprojectConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('search');
    this.route('products');
    this.route('item');
  });

  exports['default'] = Router;
});