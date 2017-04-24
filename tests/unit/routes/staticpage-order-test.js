import {moduleFor, test} from 'ember-qunit';

moduleFor('route:staticpage-order', 'Unit | Route | staticpage order', {
  needs: ['service:metrics']
});

test('it exists', function (assert) {
  let route = this.subject();
  assert.ok(route);
});
