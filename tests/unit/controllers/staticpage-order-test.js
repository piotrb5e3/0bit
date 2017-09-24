import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:staticpage-order', 'Unit | Controller | staticpage order', {
  needs: ['service:metrics', 'service:session', 'service:staticpageOrdering']
});

// Replace this with your real tests.
test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
});
