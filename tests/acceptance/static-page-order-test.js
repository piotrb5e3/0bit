import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | static page order');

let testUsername = 'xxx';
let correctPassword = 'ok123';

test('cant visit sp-order when not logged in', function(assert) {
  visit('/sp-order');
  andThen(() => {
    assert.strictEqual(currentURL(), '/login');
  });
});

test('can visit sp-order when logged in', function(assert) {
  tryLogin(testUsername, correctPassword);

  visit('/sp-order');
  andThen(() => {
    assert.strictEqual(currentURL(), '/sp-order');
  });
});

test('can visit sp-order when logged in', function(assert) {
  tryLogin(testUsername, correctPassword);

  visit('/sp-order');
  andThen(() => {
    assert.strictEqual(currentURL(), '/sp-order');
  });
});
