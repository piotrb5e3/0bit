import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site-footer', 'Integration | Component | site footer', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{site-footer}}`);

  assert.notEqual(this.$().text().trim().indexOf('Get this app'), -1);
});
