import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('page-display', 'Integration | Component | page display', {
  integration: true
});

test('it renders', function(assert) {
this.set('testPage', {
  title: 'Test title',
  url: 'test',
  contents: 'A test sentence'
});

  this.render(hbs`{{page-display page=testPage}}`);
  let renderResult = this.$().text().trim();
  assert.notStrictEqual(renderResult.indexOf('Test title'), -1);
  assert.notStrictEqual(renderResult.indexOf('A test sentence'), -1);
});
