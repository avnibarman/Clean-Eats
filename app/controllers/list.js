import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    delete() {

      var promise = $.ajax({
        url: 'http://localhost:3000/api/favorites',
        type: "DELETE"
      });

    }
  }
});
