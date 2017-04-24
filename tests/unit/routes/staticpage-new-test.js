import {moduleFor, test} from 'ember-qunit';

moduleFor('route:staticpage-new', 'Unit | Route | staticpage new', {
  needs: ['service:metrics']
});

test('it exists', function (assert) {
  let route = this.subject();
  assert.ok(route);
});
