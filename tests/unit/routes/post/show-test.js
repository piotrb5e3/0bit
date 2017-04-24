import {moduleFor, test} from 'ember-qunit';

moduleFor('route:post/show', 'Unit | Route | post/show', {
  needs: ['service:metrics']
});

test('it exists', function (assert) {
  let route = this.subject();
  assert.ok(route);
});
