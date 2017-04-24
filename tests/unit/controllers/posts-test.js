import {moduleFor, test} from 'ember-qunit';
import Ember from 'ember';

function createPostWithTimeAndId(creationTime, id) {
  let r = new Ember.Object();
  r.set('id', id);
  r.set('title', "xyz");
  r.set('contents', "abc");
  r.set('date', creationTime);
  return r;
}

moduleFor('controller:posts', 'Unit | Controller | posts', {
  needs: ['service:metrics']
});

test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('posts are sorted properly', function (assert) {
  let postList = [
    createPostWithTimeAndId(new Date(), 0),
    createPostWithTimeAndId(1000000, 1),
    createPostWithTimeAndId(4000000, 2),
    createPostWithTimeAndId(124, 3),
    createPostWithTimeAndId(900000000, 4)
  ];
  let controller = this.subject();
  controller.set('model', postList);

  let sortedPostList = controller.get('sortedPosts');

  assert.strictEqual(sortedPostList[0].id, 0);
  assert.strictEqual(sortedPostList[1].id, 4);
  assert.strictEqual(sortedPostList[2].id, 2);
  assert.strictEqual(sortedPostList[3].id, 1);
  assert.strictEqual(sortedPostList[4].id, 3);

});
