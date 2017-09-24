import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:login', 'Unit | Controller | login', {
  needs: ['service:metrics', 'service:session']
});

test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
});
