import Ember from 'ember';

var $ = Ember.$;

export default Ember.Route.extend({
  model() {

    //console.log($.getJSON('http://localhost:3000/api/favorites'));
    return $.getJSON('https://avni-clean-eats.herokuapp.com/api/favorites');
  }
});
