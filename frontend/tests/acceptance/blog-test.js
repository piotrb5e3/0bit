import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | blog');

test('Can see list of posts on the blog', function(assert) {
  let testPostTitle = 'Dummy title 0';
  server.create('post', {title: testPostTitle});
  server.createList('post', 3);
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

