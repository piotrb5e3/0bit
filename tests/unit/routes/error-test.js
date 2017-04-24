import {moduleFor, test} from 'ember-qunit';

moduleFor('route:error', 'Unit | Route | error', {
  needs: ['service:metrics']
});

test('it exists', function (assert) {
  let route = this.subject();
  assert.ok(route);
});
