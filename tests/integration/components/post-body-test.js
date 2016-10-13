import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-body', 'Integration | Component | post body', {
  integration: true
});

test('it renders', function(assert) {
  this.set('post', {id: 0, title: 'Dummy title', contents: 'Some contents', date: new Date()});

  this.render(hbs`{{post-body post=post}}`);

  let resultingRender = this.$().text().trim();

  assert.notEqual(resultingRender.indexOf('Some contents'), -1);
});
