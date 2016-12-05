define('finalproject/routes/list', ['exports', 'ember'], function (exports, _ember) {

  var $ = _ember['default'].$;

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {

      //console.log($.getJSON('http://localhost:3000/api/favorites'));
      return $.getJSON('https://avni-clean-eats.herokuapp.com/api/favorites');
    }
  });
});