import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //console.log($.getJSON('http://localhost:3000/api/favorites'));
    return $.getJSON('http://localhost:3000/api/favorites');
  }
});
