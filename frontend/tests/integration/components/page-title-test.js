import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('page-title', 'Integration | Component | page title', {
  integration: true
});

test('it renders', function(assert) {
  this.set('page', {id: 0, url:'foo', title: 'Dummy title', contents: 'Some contents'});

  this.render(hbs`{{page-title page=page}}`);

  let resultingRender = this.$().text().trim();

  assert.notEqual(resultingRender.indexOf('Dummy title'), -1);
});
