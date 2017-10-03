import { test } from 'qunit';
import moduleForAcceptance from 'ComfyMS-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | post edit & new');

let testUsername = 'xxx';
let correctPassword = 'ok123';
let testTitle = 'Test Title !';
let testContents = 'Lorem ipsum, etc.';

test('editing post changes preview', function(assert) {
  tryLogin(testUsername, correctPassword);

  visit('/post/new');

  andThen(function() {
    assert.strictEqual(currentURL(), '/post/new');
    fillIn('#post-edit-title-field', testTitle);
    fillIn('#post-edit-contents-field', testContents);
    andThen(() => {
      assert.strictEqual(find('.post-display:contains(' + testTitle + ')').length, 1);
      assert.strictEqual(find('.post-display:contains(' + testContents + ')').length, 1);
    });
  });
});

test('can submit a new post', function(assert) {
  tryLogin(testUsername, correctPassword);

  visit('/post/new');

  andThen(function() {
    assert.strictEqual(currentURL(), '/post/new');
    fillIn('#post-edit-title-field', testTitle);
    fillIn('#post-edit-contents-field', testContents);
    click('#post-edit-submit');
    andThen(() => {
      assert.strictEqual(currentURL(), '/posts');
      assert.strictEqual(find('.post-display').length, 1);
      assert.strictEqual(find('.post-display:contains(' + testTitle + ')').length, 1);
      assert.strictEqual(find('.post-display:contains(' + testContents + ')').length, 1);
    });
  });
});

test('can edit an existing post', function(assert) {
  let existingPost = server.create('post');
  tryLogin(testUsername, correctPassword);

  visit('/post/' + existingPost.id + '/edit');

  andThen(function() {
    assert.strictEqual(currentURL(), '/post/' + existingPost.id + '/edit');
    fillIn('#post-edit-title-field', testTitle);
    fillIn('#post-edit-contents-field', testContents);
    click('#post-edit-submit');
    andThen(() => {
      assert.strictEqual(currentURL(), '/posts');
      assert.strictEqual(find('.post-display').length, 1);
      assert.strictEqual(find('.post-display:contains(' + testTitle + ')').length, 1);
      assert.strictEqual(find('.post-display:contains(' + testContents + ')').length, 1);
    });
  });
});
