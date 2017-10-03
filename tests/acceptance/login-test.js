import { test } from 'qunit';
import moduleForAcceptance from 'ComfyMS-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

let testUsername = 'xxx';
let correctPassword = 'ok123';
let incorrectPassword = 'badPass';

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.strictEqual(currentURL(), '/login');
  });
});

test('successfull login behaviour', function(assert) {
  tryLogin(testUsername, correctPassword);

  andThen(function() {
    assert.strictEqual(currentURL(), '/posts');
  });
});

test('failed login behaviour', function(assert) {
  tryLogin(testUsername, incorrectPassword);

  andThen(function() {
    assert.strictEqual(currentURL(), '/login');
  });
});

test('correct navbar shown to logged user', function(assert){
  tryLogin(testUsername, correctPassword);

  andThen(function() {
    assert.strictEqual(currentURL(), '/posts');
    assert.strictEqual(find("#main-navbar a:contains(Logout)").length, 1);
  });
});

test('can logout after login', function(assert) {
  tryLogin(testUsername, correctPassword);
  andThen( () => {
    assert.strictEqual(currentURL(), '/posts');
    assert.strictEqual(find("#main-navbar a:contains(Logout)").length, 1);
    tryLogout();
    andThen(() => {
      assert.strictEqual(currentURL(), '/posts');
      assert.strictEqual(find("#main-navbar a:contains(Logout)").length, 0);
    });
  });
});
