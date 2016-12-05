import Ember from 'ember';

var $ = Ember.$;

export default Ember.Controller.extend({

  actions: {
    delete: function() {
      var promise = $.ajax({
        url: 'https://avni-clean-eats.herokuapp.com/api/favorites',
        type: "DELETE"
      });

      alert("Please refresh for an empty grocery list!");
    }
  }
});
