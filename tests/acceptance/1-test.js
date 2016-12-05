import { test } from 'qunit';
import moduleForAcceptance from 'finalproject/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | 1');

test('visiting /list redirects to the list route', function(assert) {
  visit('/list');

  andThen(function() {
    assert.equal(currentURL(), '/list');
  });
});

test('visiting /about redirects to the about route', function(assert) {
  visit('/about');
  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('user can see no results because the search parameters are not defined', function(assert) {
  visit('/');
  fillIn('.searchbar', 'taco');
  click('.submitbutton');
  andThen(function() {
    assert.equal(find('.result').length, 0);
  });
});

test('user can clear the grocery list', function(assert) {
  visit('/list');
  click('.but');
  andThen(function() {
    assert.equal(find('.listresult').length, 0);
  });
});

test('renders empty grocery list before add to groceries is clicked', function(assert) {
  visit('/');
  click('.submitbutton');
  andThen(function() {
    assert.equal(find('.listresult').length, 0);
  });
});
