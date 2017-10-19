import { moduleFor, test } from 'ember-qunit';

moduleFor('route:unpublished-posts', 'Unit | Route | unpublished posts', {
  needs: ['service:metrics', 'service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
