import {moduleFor, test} from 'ember-qunit';

moduleFor('route:staticpage-edit', 'Unit | Route | staticpage edit', {
  needs: ['service:metrics']
});

test('it exists', function (assert) {
  let route = this.subject();
  assert.ok(route);
});
