import { test } from 'qunit';
import moduleForAcceptance from 'ComfyMS-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | blog');
const testUsername = 'xxx';
const correctPassword = 'ok123';

test('Can see list of posts on the blog', function(assert) {
  let testPostTitle = 'Dummy title 0';
  server.create('post', {title: testPostTitle, published: true});
  server.createList('post', 3, {published: true});
  visit('/posts');

  andThen(() => {
    assert.strictEqual(currentURL(), '/posts');
    assert.strictEqual(find('h4:contains(' + testPostTitle + ')').length, 1);
    assert.strictEqual(find('h4').length, 4);
  });
});

test('index route redirects to /posts', function(assert) {
  visit('/');

  andThen(() => {
    assert.strictEqual(currentURL(), '/posts');
  });
});

test('unpublishing post removes it from the blog', function(assert) {
  tryLogin(testUsername, correctPassword);
  const testPost = server.create('post', {published: true});
  visit('/posts');
  andThen(() => {
    assert.strictEqual(currentURL(), '/posts');
    assert.strictEqual(find(`[data-test-post-id="${testPost.id}"]`).length, 1);
    click(`[data-test-unpublish-button-for="${testPost.id}"]`);
    andThen(() => {
      const resultPost = server.db.posts.find(testPost.id);
      assert.strictEqual(resultPost.published, false);
      assert.strictEqual(find(`[data-test-post-id="${testPost.id}"]`).length, 0);
    });
  });
});
