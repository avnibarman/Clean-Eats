define('finalproject/tests/acceptance/1-test', ['exports', 'qunit', 'finalproject/tests/helpers/module-for-acceptance'], function (exports, _qunit, _finalprojectTestsHelpersModuleForAcceptance) {

  (0, _finalprojectTestsHelpersModuleForAcceptance['default'])('Acceptance | 1');

  (0, _qunit.test)('visiting /list redirects to the list route', function (assert) {
    visit('/list');

    andThen(function () {
      assert.equal(currentURL(), '/list');
    });
  });

  (0, _qunit.test)('visiting /about redirects to the about route', function (assert) {
    visit('/about');
    andThen(function () {
      assert.equal(currentURL(), '/about');
    });
  });

  (0, _qunit.test)('user can see no results because the search parameters are not defined', function (assert) {
    visit('/');
    fillIn('.searchbar', 'taco');
    click('.submitbutton');
    andThen(function () {
      assert.equal(find('.result').length, 0);
    });
  });

  (0, _qunit.test)('user can clear the grocery list', function (assert) {
    visit('/list');
    click('.but');
    andThen(function () {
      assert.equal(find('.listresult').length, 0);
    });
  });

  (0, _qunit.test)('renders empty grocery list before add to groceries is clicked', function (assert) {
    visit('/');
    click('.submitbutton');
    andThen(function () {
      assert.equal(find('.listresult').length, 0);
    });
  });
});