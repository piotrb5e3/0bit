import {moduleFor, test} from 'ember-qunit';

moduleFor('route:loading', 'Unit | Route | loading', {
  needs: ['service:metrics']
});

test('it exists', function (assert) {
  let route = this.subject();
  assert.ok(route);
});
