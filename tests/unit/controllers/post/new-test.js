import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:post/new', 'Unit | Controller | post/new', {
  needs: ['service:metrics']
});

test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
});
