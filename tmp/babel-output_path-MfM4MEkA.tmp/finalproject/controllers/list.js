define('finalproject/controllers/list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    actions: {
      'delete': function _delete() {

        var promise = $.ajax({
          url: 'http://localhost:3000/api/favorites',
          type: "DELETE"
        });
      }
    }
  });
});