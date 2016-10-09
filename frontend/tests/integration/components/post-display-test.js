import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('post-display', 'Integration | Component | post display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('post', {id: 0, title: 'Dummy title', contents: 'Some contents', date: new Date()});

  this.render(hbs`{{post-display post=post}}`);

  let resultingRender = this.$().text().trim();
  
  assert.notEqual(resultingRender.indexOf('Dummy title'), -1);
  assert.notEqual(resultingRender.indexOf('Some contents'), -1);
  assert.notEqual(resultingRender.indexOf('Today'), -1);
});
