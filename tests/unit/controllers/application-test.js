import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | application', {
    needs: ['service:metrics', 'service:session']
});

test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
});
