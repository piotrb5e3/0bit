import {moduleFor, test} from 'ember-qunit';

moduleFor('route:post/new', 'Unit | Route | post/new', {
  needs: ['service:metrics']
});

test('it exists', function (assert) {
  let route = this.subject();
  assert.ok(route);
});
