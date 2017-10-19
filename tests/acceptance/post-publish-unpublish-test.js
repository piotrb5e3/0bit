import { test } from 'qunit';
import moduleForAcceptance from 'ComfyMS-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | post publish unpublish');
const testUsername = 'xxx';
const correctPassword = 'ok123';

test('publishing a post', function(assert) {
  tryLogin(testUsername, correctPassword);
  const testPost = server.create('post', {published: false})

  visit(`/post/${testPost.id}`);
  andThen(function() {
    assert.strictEqual(currentURL(), `/post/${testPost.id}`);
    click(`[data-test-publish-button-for="${testPost.id}"]`);
    andThen(() => {
      const resultPost = server.db.posts.find(testPost.id);
      assert.strictEqual(resultPost.published, true);
    });
  });
});

test('unpublishing a post', function(assert) {
  tryLogin(testUsername, correctPassword);
  const testPost = server.create('post', {published: true})

  visit(`/post/${testPost.id}`);
  andThen(function() {
    assert.strictEqual(currentURL(), `/post/${testPost.id}`);
    click(`[data-test-unpublish-button-for="${testPost.id}"]`);
    andThen(() => {
      const resultPost = server.db.posts.find(testPost.id);
      assert.strictEqual(resultPost.published, false);
    });
  });
});
