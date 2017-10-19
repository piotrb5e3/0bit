import { test } from 'qunit';
import moduleForAcceptance from 'ComfyMS-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | unpublished posts');
const testUsername = 'xxx';
const correctPassword = 'ok123';

test('cannot visit /unpublished-posts when anonymous', function(assert) {
  visit('/unpublished-posts');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('can visit /unpublished-posts when logged in', function(assert) {
  tryLogin(testUsername, correctPassword);
  visit('/unpublished-posts');

  andThen(function() {
    assert.equal(currentURL(), '/unpublished-posts');
  });
});

test('all unpublished posts are displayed on unpublished-posts', (assert) => {
  tryLogin(testUsername, correctPassword);
  const unpublishedPosts = server.createList('post', 10, {published: false});
  const publishedPosts = server.createList('post', 10, {published: true});
  visit('/unpublished-posts');
  andThen(() => {
    assert.strictEqual(currentURL(), '/unpublished-posts');
    for(const p of unpublishedPosts) {
      assert.strictEqual(find(`[data-test-post-id="${p.id}"]`).length, 1);
    }
    for(const p of publishedPosts) {
      assert.strictEqual(find(`[data-test-post-id="${p.id}"]`).length, 0);
    }
  });
});

test('publishing post removes it from unpublished-posts', function(assert) {
  tryLogin(testUsername, correctPassword);
  const testPost = server.create('post', {published: false});
  visit('/unpublished-posts');
  andThen(() => {
    assert.strictEqual(currentURL(), '/unpublished-posts');
    assert.strictEqual(find(`[data-test-post-id="${testPost.id}"]`).length, 1);
    click(`[data-test-publish-button-for="${testPost.id}"]`);
    andThen(() => {
      const resultPost = server.db.posts.find(testPost.id);
      assert.strictEqual(resultPost.published, true);
      assert.strictEqual(find(`[data-test-post-id="${testPost.id}"]`).length, 0);
    });
  });
});
