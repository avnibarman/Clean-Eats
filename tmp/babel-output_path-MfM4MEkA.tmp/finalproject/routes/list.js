define('finalproject/routes/list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      //console.log($.getJSON('http://localhost:3000/api/favorites'));
      return $.getJSON('http://localhost:3000/api/favorites');
    }
  });
});