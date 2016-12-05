"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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
define('finalproject/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'finalproject/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _finalprojectConfigEnvironment) {

  var name = _finalprojectConfigEnvironment['default'].APP.name;
  var version = _finalprojectConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('finalproject/components/food-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    // weightLoss: Ember.computed('item.hits.fields.nf_sugars', 'item.hits.fields.nf_total_carbohydrate', function(){
    // return ( this.get('item.hits.fields.nf_sugars') < 10);
    // }),
    //
    // lowCarb: Ember.computed('item.hits.fields.nf_total_carbohydrate', function(){
    //   return this.get('item.hits.fields.nf_total_carbohydrate') < 15;
    //
    // })

  });
});
define('finalproject/controllers/list', ['exports', 'ember'], function (exports, _ember) {

  var $ = _ember['default'].$;

  exports['default'] = _ember['default'].Controller.extend({

    actions: {
      'delete': function _delete() {
        var promise = $.ajax({
          url: 'https://avni-clean-eats.herokuapp.com/api/favorites',
          type: "DELETE"
        });

        alert("Please refresh for an empty grocery list!");
      }
    }
  });
});
define('finalproject/controllers/search', ['exports', 'ember'], function (exports, _ember) {

  var $ = _ember['default'].$;

  exports['default'] = _ember['default'].Controller.extend({

    actions: {
      postList: function postList(itemName) {
        //console.log(itemName);
        var promise = $.ajax({
          url: 'https://avni-clean-eats.herokuapp.com/api/favorites',
          type: "POST",
          data: { item: itemName },
          success: function success(data) {
            console.log(data);
            controller.set('response', data);
          },
          dataType: 'json'
        });

        alert("You have added '" + itemName + "' to your grocery list!");
      },

      selectPreference: function selectPreference(preference) {

        this.set('preference', preference);
      },

      search: function search() {

        var pref = this.get('preference');

        // if(pref == null){
        //   pref = "lowcalorie";
        // }
        // else{
        //   pref = this.get('preference');
        // }

        var url = 'https://api.nutritionix.com/v1_1/search';
        var data = {};

        if (pref == "lowcarb") {
          data = {
            "appId": "74327998",
            "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
            "query": this.get("foodItem"),
            "fields": ["item_name", "brand_name", "nf_serving_size_qty", "nf_calories", "nf_calories_from_fat", "nf_sugars", "nf_sodium", "nf_ingredient_statement", "nf_total_carbohydrate", "nf_protein", "images_front_full_url"],
            "offset": 0,
            "limit": 50,
            "sort": {
              "field": "nf_total_carbohydrate",
              "order": "asc"
            },
            "filters": {
              // "nf_total_carbohydrate":{
              //   "lte": 15
              // },
              "item_type": 2
            }
          };
        } else if (pref == "highcarb") {
          data = {
            "appId": "74327998",
            "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
            "query": this.get("foodItem"),
            "fields": ["item_name", "brand_name", "nf_serving_size_qty", "nf_calories", "nf_calories_from_fat", "nf_sugars", "nf_sodium", "nf_ingredient_statement", "nf_total_carbohydrate", "nf_protein"],
            "offset": 0,
            "limit": 50,
            "sort": {
              "field": "nf_total_carbohydrate",
              "order": "desc"
            },
            "filters": {
              // "nf_total_carbohydrate":{
              //   "lte": 15
              // },
              "item_type": 2
            }
          };
        } else if (pref == "lowcalorie") {
          data = {
            "appId": "74327998",
            "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
            "query": this.get("foodItem"),
            "fields": ["item_name", "brand_name", "nf_calories", "nf_calories_from_fat", "nf_sugars", "nf_sodium", "nf_serving_size_qty", "nf_ingredient_statement", "nf_total_carbohydrate", "nf_protein"],
            "offset": 0,
            "limit": 50,
            "sort": {
              "field": "nf_calories",
              "order": "asc"
            },
            "filters": {
              // "nf_total_carbohydrate":{
              //   "lte": 15
              // },
              "item_type": 2
            }
          };
        } else if (pref == "lowsugar") {

          data = {
            "appId": "74327998",
            "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
            "query": this.get("foodItem"),
            "fields": ["item_name", "brand_name", "nf_ingredient_statement", "nf_serving_size_qty", "nf_sugars", "nf_sodium", "nf_calories", "nf_calories_from_fat", "nf_total_carbohydrate", "nf_protein"],
            "offset": 0,
            "limit": 50,
            "sort": {
              "field": "nf_sugars",
              "order": "asc"
            },
            "filters": {
              // "nf_calories":{
              //   "lte": 200
              // },
              // "nf_total_fat":{
              //   "lte": 10
              // },
              // "nf_sugars":{
              //   "lte": 5
              // },
              // "nf_total_carbohydrate":{
              //   "lte": 15
              // },
              "item_type": 2
            }
          };
        } else if (pref == "lowsodium") {
          data = {
            "appId": "74327998",
            "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
            "query": this.get("foodItem"),
            "fields": ["item_name", "brand_name", "nf_ingredient_statement", "nf_calories", "nf_calories_from_fat", "nf_serving_size_qty", "nf_sugars", "nf_sodium", "nf_total_carbohydrate", "nf_protein"],
            "offset": 0,
            "limit": 50,
            "sort": {
              "field": "nf_sodium",
              "order": "asc"
            },
            "filters": {
              // "nf_total_carbohydrate":{
              //   "lte": 15
              // },
              "item_type": 2
            }
          };
        } else if (pref == "highprotein") {
          data = {
            "appId": "74327998",
            "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
            "query": this.get("foodItem"),
            "fields": ["item_name", "brand_name", "nf_calories", "nf_ingredient_statement", "nf_calories_from_fat", "nf_serving_size_qty", "nf_total_carbohydrate", "nf_sugars", "nf_protein", "nf_sodium"],
            "offset": 0,
            "limit": 50,
            "sort": {
              "field": "nf_protein",
              "order": "desc"
            },
            "filters": {
              // "nf_calories":{
              //   "lte": 200
              // },
              // "nf_total_fat":{
              //   "lte": 10
              // },
              // "nf_sugars":{
              //   "lte": 5
              // },
              // "nf_total_carbohydrate":{
              //   "lte": 15
              // },
              "item_type": 2
            }
          };
        }

        var controller = this;

        var promise = $.ajax({
          url: url,
          type: "POST",
          data: data,
          success: function success(data) {
            console.log(data);
            controller.set('response', data);
          },
          dataType: 'json'
        });
      }
    }
  });
});
define('finalproject/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('finalproject/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('finalproject/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'finalproject/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _finalprojectConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_finalprojectConfigEnvironment['default'].APP.name, _finalprojectConfigEnvironment['default'].APP.version)
  };
});
define('finalproject/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('finalproject/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('finalproject/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('finalproject/initializers/export-application-global', ['exports', 'ember', 'finalproject/config/environment'], function (exports, _ember, _finalprojectConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_finalprojectConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _finalprojectConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_finalprojectConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('finalproject/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('finalproject/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('finalproject/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("finalproject/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('finalproject/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('finalproject/router', ['exports', 'ember', 'finalproject/config/environment'], function (exports, _ember, _finalprojectConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _finalprojectConfigEnvironment['default'].locationType,
    rootURL: _finalprojectConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('search', { path: '/' });
    this.route('about');
    this.route('contact');
    this.route('list');
  });

  exports['default'] = Router;
});
define('finalproject/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('finalproject/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('finalproject/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('finalproject/routes/list', ['exports', 'ember'], function (exports, _ember) {

  var $ = _ember['default'].$;

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {

      //console.log($.getJSON('http://localhost:3000/api/favorites'));
      return $.getJSON('https://avni-clean-eats.herokuapp.com/api/favorites');
    }
  });
});
define('finalproject/routes/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('finalproject/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("finalproject/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 64
            }
          },
          "moduleName": "finalproject/templates/about.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Clean Eats");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 14
            },
            "end": {
              "line": 17,
              "column": 54
            }
          },
          "moduleName": "finalproject/templates/about.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Your Grocery List");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 14
            },
            "end": {
              "line": 18,
              "column": 43
            }
          },
          "moduleName": "finalproject/templates/about.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("About");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "padding-top: 70px;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        dom.setAttribute(el2, "class", "navbar navbar-inverse navbar-fixed-top");
        dom.setAttribute(el2, "role", "navigation");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Brand and toggle get grouped for better mobile display ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "navbar-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "navbar-toggle");
        dom.setAttribute(el5, "data-toggle", "collapse");
        dom.setAttribute(el5, "data-target", "#bs-example-navbar-collapse-1");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "sr-only");
        var el7 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <a class=\"navbar-brand\" href=\"#\">Clean Eats</a> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "collapse navbar-collapse");
        dom.setAttribute(el4, "id", "bs-example-navbar-collapse-1");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.navbar-collapse ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.container ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "panel panel-default");
        dom.setAttribute(el3, "style", "width: 75%; margin: auto; line-spacing: 20;");
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-heading");
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createTextNode("About");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-body");
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        var el6 = dom.createTextNode("Clean Eats helps you find the best grocery products for your individual health preferences\n      (i.e. weight loss diets, high blood pressure, diabetes, etc.). This web app uses nutrition labels of grocery products from the Nutrionix API to suggest the best possible products.\n      The user can also make personalized grocery lists from the results.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      Contact abarman@usc.edu for more details\n  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [5, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["search"], ["class", "navbar-brand"], 0, null, ["loc", [null, [12, 8], [12, 64]]]], ["block", "link-to", ["list"], [], 1, null, ["loc", [null, [17, 14], [17, 54]]]], ["block", "link-to", ["about"], [], 2, null, ["loc", [null, [18, 14], [18, 43]]]], ["content", "outlet", ["loc", [null, [38, 0], [38, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("finalproject/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\"\n      data-toggle=\"collapse\" data-target=\"#menu-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      {{ link-to 'Home' 'index' class=\"navbar-brand\" }}\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"menu-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li>{{ link-to 'About' 'about' }}</li>\n        <li>{{ link-to 'Contact' 'contact' }}</li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n</div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [27, 0], [27, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("finalproject/templates/components/food-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/components/food-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("finalproject/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 16
            },
            "end": {
              "line": 13,
              "column": 72
            }
          },
          "moduleName": "finalproject/templates/contact.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Clean Eats");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 22
            },
            "end": {
              "line": 19,
              "column": 51
            }
          },
          "moduleName": "finalproject/templates/contact.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("About");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 22
            },
            "end": {
              "line": 20,
              "column": 55
            }
          },
          "moduleName": "finalproject/templates/contact.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Contact");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/contact.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "padding-top: 70px;");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        dom.setAttribute(el2, "class", "navbar navbar-inverse navbar-fixed-top");
        dom.setAttribute(el2, "role", "navigation");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Brand and toggle get grouped for better mobile display ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "navbar-header");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "navbar-toggle");
        dom.setAttribute(el5, "data-toggle", "collapse");
        dom.setAttribute(el5, "data-target", "#bs-example-navbar-collapse-1");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "sr-only");
        var el7 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <a class=\"navbar-brand\" href=\"#\">Clean Eats</a> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Collect the nav links, forms, and other content for toggling ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "collapse navbar-collapse");
        dom.setAttribute(el4, "id", "bs-example-navbar-collapse-1");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "nav navbar-nav");
        var el6 = dom.createTextNode("\n                  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.navbar-collapse ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.container ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Contact");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "inputEmail");
        var el6 = dom.createTextNode("Your Email address");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "email");
        dom.setAttribute(el5, "class", "form-control");
        dom.setAttribute(el5, "id", "inputEmail");
        dom.setAttribute(el5, "placeholder", "Email");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "inputComments");
        var el6 = dom.createTextNode("Comments");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("textarea");
        dom.setAttribute(el5, "class", "form-control");
        dom.setAttribute(el5, "id", "inputComments");
        dom.setAttribute(el5, "placeholder", "Comments");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "submit");
        dom.setAttribute(el4, "class", "btn btn-default");
        var el5 = dom.createTextNode("Submit");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [7, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["block", "link-to", ["search"], ["class", "navbar-brand"], 0, null, ["loc", [null, [13, 16], [13, 72]]]], ["block", "link-to", ["about"], [], 1, null, ["loc", [null, [19, 22], [19, 51]]]], ["block", "link-to", ["contact"], [], 2, null, ["loc", [null, [20, 22], [20, 55]]]], ["content", "outlet", ["loc", [null, [43, 0], [43, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("finalproject/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("finalproject/templates/list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 33
            },
            "end": {
              "line": 8,
              "column": 89
            }
          },
          "moduleName": "finalproject/templates/list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Clean Eats");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 64
            }
          },
          "moduleName": "finalproject/templates/list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Clean Eats");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 14
            },
            "end": {
              "line": 18,
              "column": 54
            }
          },
          "moduleName": "finalproject/templates/list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Your Grocery List");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 14
            },
            "end": {
              "line": 19,
              "column": 43
            }
          },
          "moduleName": "finalproject/templates/list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("About");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 0
            },
            "end": {
              "line": 38,
              "column": 0
            }
          },
          "moduleName": "finalproject/templates/list.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "listresult");
          dom.setAttribute(el1, "style", "background-color: #e3e3e3; width: 100%; margin: auto; padding: 1%; border: 1px solid #419641;");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h6");
          var el3 = dom.createElement("b");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1, 0]), 0, 0);
          return morphs;
        },
        statements: [["content", "item.item", ["loc", [null, [36, 9], [36, 22]]], 0, 0, 0, 0]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "padding-top: 70px;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        dom.setAttribute(el2, "class", "navbar navbar-inverse navbar-fixed-top");
        dom.setAttribute(el2, "role", "navigation");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Brand and toggle get grouped for better mobile display ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "navbar-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "navbar-toggle");
        dom.setAttribute(el5, "data-toggle", "collapse");
        dom.setAttribute(el5, "data-target", "#bs-example-navbar-collapse-1");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "sr-only");
        var el7 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <a class=\"navbar-brand\" href=\"#\">Clean Eats</a> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Collect the nav links, forms, and other content for toggling ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "collapse navbar-collapse");
        dom.setAttribute(el4, "id", "bs-example-navbar-collapse-1");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.navbar-collapse ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.container ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "style", "width: 60%; margin: auto;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "style", "float: left;");
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("My Grocery List");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "style", "float: right;");
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "but");
        dom.setAttribute(el4, "style", "margin-top: 10px;");
        var el5 = dom.createTextNode("Clear List");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "style", "background-color: #e3e3e3; width: 60%; margin: auto; border: 3px solid #419641;");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element1, [7, 1]);
        var element4 = dom.childAt(element0, [3, 3, 0]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1, 3]), 0, 0);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [3]), 0, 0);
        morphs[4] = dom.createElementMorph(element4);
        morphs[5] = dom.createMorphAt(dom.childAt(element0, [11]), 1, 1);
        morphs[6] = dom.createMorphAt(element0, 13, 13);
        return morphs;
      },
      statements: [["block", "link-to", ["search"], ["class", "navbar-brand"], 0, null, ["loc", [null, [8, 33], [8, 89]]]], ["block", "link-to", ["search"], ["class", "navbar-brand"], 1, null, ["loc", [null, [12, 8], [12, 64]]]], ["block", "link-to", ["list"], [], 2, null, ["loc", [null, [18, 14], [18, 54]]]], ["block", "link-to", ["about"], [], 3, null, ["loc", [null, [19, 14], [19, 43]]]], ["element", "action", ["delete"], ["preventDefault", false], ["loc", [null, [28, 81], [28, 121]]], 0, 0], ["block", "each", [["get", "model.data", ["loc", [null, [34, 8], [34, 18]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [34, 0], [38, 9]]]], ["content", "outlet", ["loc", [null, [41, 0], [41, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("finalproject/templates/search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 64
            }
          },
          "moduleName": "finalproject/templates/search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Clean Eats");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 14
            },
            "end": {
              "line": 18,
              "column": 54
            }
          },
          "moduleName": "finalproject/templates/search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Your Grocery List");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 14
            },
            "end": {
              "line": 19,
              "column": 43
            }
          },
          "moduleName": "finalproject/templates/search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("About");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 57,
              "column": 2
            },
            "end": {
              "line": 77,
              "column": 4
            }
          },
          "moduleName": "finalproject/templates/search.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "result");
          dom.setAttribute(el1, "style", "background-color: #e3e3e3; padding: 2.5%; border: 2px solid #419641;");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createElement("b");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(", ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("em");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Ingredients: ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Calories:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Calories from Fat:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Total Carbohydrates:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Protein:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Sugars:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Sodium:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("form");
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "submit");
          dom.setAttribute(el3, "class", "submitbutton");
          dom.setAttribute(el3, "value", "Add to Grocery List");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [4]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [42]);
          var element3 = dom.childAt(element2, [3]);
          var morphs = new Array(11);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [0]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [2]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [9]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [15]), 0, 0);
          morphs[5] = dom.createMorphAt(dom.childAt(element0, [21]), 0, 0);
          morphs[6] = dom.createMorphAt(dom.childAt(element0, [27]), 0, 0);
          morphs[7] = dom.createMorphAt(dom.childAt(element0, [32]), 0, 0);
          morphs[8] = dom.createMorphAt(dom.childAt(element0, [37]), 0, 0);
          morphs[9] = dom.createMorphAt(element2, 1, 1);
          morphs[10] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["content", "item.fields.item_name", ["loc", [null, [60, 11], [60, 36]]], 0, 0, 0, 0], ["content", "item.fields.brand_name", ["loc", [null, [60, 46], [60, 72]]], 0, 0, 0, 0], ["content", "item.fields.nf_ingredient_statement", ["loc", [null, [61, 21], [61, 60]]], 0, 0, 0, 0], ["content", "item.fields.nf_calories", ["loc", [null, [62, 52], [62, 79]]], 0, 0, 0, 0], ["content", "item.fields.nf_calories_from_fat", ["loc", [null, [63, 60], [63, 96]]], 0, 0, 0, 0], ["content", "item.fields.nf_total_carbohydrate", ["loc", [null, [64, 62], [64, 99]]], 0, 0, 0, 0], ["content", "item.fields.nf_protein", ["loc", [null, [65, 50], [65, 76]]], 0, 0, 0, 0], ["content", "item.fields.nf_sugars", ["loc", [null, [66, 49], [66, 74]]], 0, 0, 0, 0], ["content", "item.fields.nf_sodium", ["loc", [null, [67, 50], [67, 75]]], 0, 0, 0, 0], ["inline", "input", [], ["type", "hidden", "value", ["subexpr", "@mut", [["get", "item.fields.item_name", ["loc", [null, [71, 34], [71, 55]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [71, 6], [71, 57]]], 0, 0], ["element", "action", ["postList", ["get", "item.fields.item_name", ["loc", [null, [72, 96], [72, 117]]], 0, 0, 0, 0]], [], ["loc", [null, [72, 76], [72, 119]]], 0, 0]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 81,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "padding-top: 70px;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        dom.setAttribute(el2, "class", "navbar navbar-inverse navbar-fixed-top");
        dom.setAttribute(el2, "role", "navigation");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Brand and toggle get grouped for better mobile display ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "navbar-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "navbar-toggle");
        dom.setAttribute(el5, "data-toggle", "collapse");
        dom.setAttribute(el5, "data-target", "#bs-example-navbar-collapse-1");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "sr-only");
        var el7 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <a class=\"navbar-brand\" href=\"#\">Clean Eats</a> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Collect the nav links, forms, and other content for toggling ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "collapse navbar-collapse");
        dom.setAttribute(el4, "id", "bs-example-navbar-collapse-1");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.navbar-collapse ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.container ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" <div>\n  <form>\n  {{input type=\"text\" value=listItem}}\n  <input type=\"submit\" {{action \"postList\"}}/>\n</form>\n</div> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Page Content ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        var el5 = dom.createTextNode("What groceries would you like to purchase?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("(i.e. fish, candy, oatmeal)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        var el5 = dom.createTextNode("Diet Preferences*");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "lowcarb");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  Low Carb");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "highcarb");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  High Carb");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "highprotein");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  High Protein");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "lowcalorie");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  Low Calorie");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "lowsugar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  Low Sugar");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "lowsodium");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  Low Sodium");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "submit");
        dom.setAttribute(el4, "class", "submitbutton btn btn-success");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [0]);
        var element5 = dom.childAt(element4, [1, 1]);
        var element6 = dom.childAt(element5, [7, 1]);
        var element7 = dom.childAt(element4, [7]);
        var element8 = dom.childAt(element7, [1]);
        var element9 = dom.childAt(element8, [11, 0]);
        var element10 = dom.childAt(element8, [13, 0]);
        var element11 = dom.childAt(element8, [15, 0]);
        var element12 = dom.childAt(element8, [17, 0]);
        var element13 = dom.childAt(element8, [19, 0]);
        var element14 = dom.childAt(element8, [21, 0]);
        var element15 = dom.childAt(element8, [25]);
        var morphs = new Array(12);
        morphs[0] = dom.createMorphAt(dom.childAt(element5, [3]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element6, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element6, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(element8, 5, 5);
        morphs[4] = dom.createAttrMorph(element9, 'onclick');
        morphs[5] = dom.createAttrMorph(element10, 'onclick');
        morphs[6] = dom.createAttrMorph(element11, 'onclick');
        morphs[7] = dom.createAttrMorph(element12, 'onclick');
        morphs[8] = dom.createAttrMorph(element13, 'onclick');
        morphs[9] = dom.createAttrMorph(element14, 'onclick');
        morphs[10] = dom.createElementMorph(element15);
        morphs[11] = dom.createMorphAt(element7, 5, 5);
        return morphs;
      },
      statements: [["block", "link-to", ["search"], ["class", "navbar-brand"], 0, null, ["loc", [null, [12, 8], [12, 64]]]], ["block", "link-to", ["list"], [], 1, null, ["loc", [null, [18, 14], [18, 54]]]], ["block", "link-to", ["about"], [], 2, null, ["loc", [null, [19, 14], [19, 43]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "foodItem", ["loc", [null, [38, 30], [38, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "searchbar"], ["loc", [null, [38, 4], [38, 58]]], 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowcarb"], [], ["loc", [null, [null, null], [43, 103]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "highcarb"], [], ["loc", [null, [null, null], [44, 105]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "highprotein"], [], ["loc", [null, [null, null], [45, 111]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowcalorie"], [], ["loc", [null, [null, null], [46, 109]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowsugar"], [], ["loc", [null, [null, null], [47, 105]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowsodium"], [], ["loc", [null, [null, null], [48, 107]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["search"], [], ["loc", [null, [50, 62], [50, 81]]], 0, 0], ["block", "each", [["get", "response.hits", ["loc", [null, [57, 10], [57, 23]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [57, 2], [77, 13]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('finalproject/config/environment', ['ember'], function(Ember) {
  var prefix = 'finalproject';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("finalproject/app")["default"].create({"name":"finalproject","version":"0.0.0+16a3e8a7"});
}

/* jshint ignore:end */
//# sourceMappingURL=finalproject.map