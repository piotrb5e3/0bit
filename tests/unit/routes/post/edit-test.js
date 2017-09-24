import {moduleFor, test} from 'ember-qunit';

moduleFor('route:post/edit', 'Unit | Route | post/edit', {
    needs: ['service:metrics', 'service:session']
});

test('it exists', function (assert) {
  let route = this.subject();
  assert.ok(route);
});
