import {test} from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | static page edit');

let testUsername = 'xxx';
let correctPassword = 'ok123';
let testTitle = 'Test Title !';
let testContents = 'Lorem ipsum, etc.';
let testUrl = 't00t';

test('editing page changes preview', function (assert) {
  tryLogin(testUsername, correctPassword);

  visit('/sp-new');

  andThen(function () {
    assert.strictEqual(currentURL(), '/sp-new');
    fillIn('#page-edit-title-field', testTitle);
    fillIn('#page-edit-contents-field', testContents);
    andThen(() => {
      assert.strictEqual(find('.page-display:contains(' + testTitle + ')').length, 1);
      assert.strictEqual(find('.page-display:contains(' + testContents + ')').length, 1);
    });
  });
});

test('can submit a new page', function (assert) {
  tryLogin(testUsername, correctPassword);

  visit('/sp-new');

  andThen(function () {
    assert.strictEqual(currentURL(), '/sp-new');
    fillIn('#page-edit-title-field', testTitle);
    fillIn('#page-edit-contents-field', testContents);
    fillIn('#page-edit-url-field', testUrl);
    click('#page-edit-submit');

    andThen(() => {
      visit('/?page=' + testUrl);
      andThen(() => {
        assert.strictEqual(currentURL(), '/?page=' + testUrl);
        assert.strictEqual(find('.page-display').length, 1);
        assert.strictEqual(find('.page-display:contains(' + testTitle + ')').length, 1);
        assert.strictEqual(find('.page-display:contains(' + testContents + ')').length, 1);
      });
    });
  });
});

test('can edit an existing page', function (assert) {
  let existingPage = server.create('staticPage');
  tryLogin(testUsername, correctPassword);

  visit('/sp-edit/' + existingPage.id);

  andThen(function () {
    assert.strictEqual(currentURL(), '/sp-edit/' + existingPage.id);
    fillIn('#page-edit-title-field', testTitle);
    fillIn('#page-edit-contents-field', testContents);
    click('#page-edit-submit');
    andThen(() => {
      visit('/?page=' + existingPage.url);
      andThen(() => {
        assert.strictEqual(currentURL(), '/?page=' + existingPage.url);
        assert.strictEqual(find('.page-display').length, 1);
        assert.strictEqual(find('.page-display:contains(' + testTitle + ')').length, 1);
        assert.strictEqual(find('.page-display:contains(' + testContents + ')').length, 1);
      });
    });
  });
});
