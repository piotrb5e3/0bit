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
