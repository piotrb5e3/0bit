import faker from 'faker';
import moment from 'moment';

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-title', 'Integration | Component | post title', {
  integration: true
});

test('it renders', function(assert) {
  this.set('post', {id: 0, title: 'Dummy title', contents: 'Some contents', date: new Date()});

  this.render(hbs`{{post-title post=post isPreview=true}}`);

  const resultingRender = this.$().text().trim();

  assert.notStrictEqual(resultingRender.indexOf('Dummy title'), -1);
  assert.notStrictEqual(resultingRender.indexOf('Today'), -1);
  assert.strictEqual(resultingRender.indexOf('Edit'), -1);
});

test('it renders lastEditedDate with recent edit', function(assert) {
  const editedDate = new Date();
  const createdDate = moment(editedDate).subtract(10, 'd').toDate();
  this.set('post', {
    date: createdDate,
    lastEditedDate: editedDate,
  });
  this.render(hbs`{{post-title post=post isPreview=false}}`);
  assert.strictEqual(this.$('time').length, 2);
  assert.strictEqual(this.$(this.$('time').get(1)).attr('data-test-last-edited'), `${editedDate}`);
});

test('it does not render lastEditedDate with hotfixed edit', function(assert) {
  const editedDate = faker.date.recent(0);
  const createdDate = moment(editedDate).subtract(10, 'm').toDate();
  this.set('post', {
    date: createdDate,
    lastEditedDate: editedDate,
  });
  this.render(hbs`{{post-title post=post isPreview=true}}`);
  assert.strictEqual(this.$('time').length, 1);
});
