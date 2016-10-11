import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | static page');

test('Can visit a static page', function(assert) {
  let staticPage = server.create('staticPage');
  visit('/?page=' + staticPage.url);

  andThen(function() {
    assert.strictEqual(currentURL(), '/?page=' + staticPage.url);
    assert.strictEqual(find('h3:contains(' + staticPage.title + ')').length, 1);
  });
});

test("Can't visit /sp-new if not logged in", function(assert) {
  visit('/sp-new');
  andThen(function() {
    assert.strictEqual(currentURL(), '/login');
  });
});

test("Can't visit /sp-edit/:id if not logged in", function(assert) {
  let testPage = server.create('staticPage');
  visit('/sp-edit/' + testPage.id);
  andThen(function() {
    assert.strictEqual(currentURL(), '/login');
  });
});

test('Can visit /sp-new if logged in', function(assert) {
  tryLogin('abc', 'okok');
  visit('/sp-new');
  andThen(function() {
    assert.strictEqual(currentURL(), '/sp-new');
  });
});

test('Can visit /sp-edit/:id  if logged in', function(assert) {
  let testPage = server.create('staticPage');
  tryLogin('abc', 'okok');
  visit('/sp-edit/' + testPage.id);
  andThen(function() {
    assert.strictEqual(currentURL(), '/sp-edit/' + testPage.id);
  });
});
