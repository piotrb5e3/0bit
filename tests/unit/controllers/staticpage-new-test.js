import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:staticpage-new', 'Unit | Controller | staticpage new', {
  needs: ['service:metrics', 'service:session']
});

// Replace this with your real tests.
test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
});
