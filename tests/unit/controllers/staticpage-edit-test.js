import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:staticpage-edit', 'Unit | Controller | staticpage edit', {
  needs: ['service:metrics', 'service:session']
});

// Replace this with your real tests.
test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
});
