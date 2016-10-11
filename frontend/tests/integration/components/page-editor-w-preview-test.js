import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('page-editor-w-preview', 'Integration | Component | page editor with preview', {
  integration: true
});

test('it renders', function(assert) {
  this.on('dummyAction', () => {});

  this.render(hbs`{{page-editor-w-preview submitAction=(action 'dummyAction')}}`);

  let renderResult = this.$().text().trim();
  assert.notStrictEqual(renderResult.indexOf('Edit'), -1);
});

test('it fills input fields correctly', function(assert) {
  let testTitle = 'some title';
  let testUrl = 'some url';
  let testContents = 'some contents';

  this.on('dummyAction', () => {});
  this.set('title', testTitle);
  this.set('url', testUrl);
  this.set('contents', testContents);

  this.render(hbs`{{page-editor-w-preview title=title url=url contents=contents
                                          submitAction=(action 'dummyAction')}}`);

  let renderResult = this.$().text().trim();
  assert.notStrictEqual(renderResult.indexOf(testTitle), -1);
  assert.notStrictEqual(renderResult.indexOf(testContents), -1);
});
