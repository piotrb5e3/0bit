import { test } from 'qunit';
import moduleForAcceptance from 'ComfyMS-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | post');

test('Can visit single post page', function(assert) {
  server.createList('post', 3);
  let testPost = server.create('post');
  server.createList('post', 10);
  visit('/post/' + testPost.id);

  andThen(function() {
    assert.strictEqual(currentURL(), '/post/' + testPost.id);
    assert.strictEqual(find('h4:contains(' + testPost.title + ')').length, 1);
    assert.strictEqual(find('h4').length, 1);
  });
});

test("Can't visit /post/new if not logged in", function(assert) {
  visit('/post/new');
  andThen(function() {
    assert.strictEqual(currentURL(), '/login');
  });
});

test("Can't visit /post/:id/edit if not logged in", function(assert) {
  let testPost = server.create('post');
  visit('/post/' + testPost.id + '/edit');
  andThen(function() {
    assert.strictEqual(currentURL(), '/login');
  });
});

test('Can visit /post/new if logged in', function(assert) {
  tryLogin('abc', 'okok');
  visit('/post/new');
  andThen(function() {
    assert.strictEqual(currentURL(), '/post/new');
  });
});

test('Can visit /post/:id/edit if logged in', function(assert) {
  let testPost = server.create('post');
  tryLogin('abc', 'okok');
  visit('/post/' + testPost.id + '/edit');
  andThen(function() {
    assert.strictEqual(currentURL(), '/post/' + testPost.id + '/edit');
  });
});
