import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-title', 'Integration | Component | post title', {
  integration: true
});

test('it renders', function(assert) {
  this.set('post', {id: 0, title: 'Dummy title', contents: 'Some contents', date: new Date()});

  this.render(hbs`{{post-title post=post isPreview=true}}`);

  let resultingRender = this.$().text().trim();

  assert.notEqual(resultingRender.indexOf('Dummy title'), -1);
  assert.notEqual(resultingRender.indexOf('Today'), -1);
  assert.equal(resultingRender.indexOf('Edit'), -1);
});
