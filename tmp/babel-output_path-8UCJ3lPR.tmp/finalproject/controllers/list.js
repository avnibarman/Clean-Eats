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