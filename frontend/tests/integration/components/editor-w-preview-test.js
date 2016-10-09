import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('editor-w-preview', 'Integration | Component | editor w preview', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.on('submitAction', ()=>{});
  this.set('model', {title: "Test Title", contents: "Dummy Contents"});

  this.render(hbs`{{editor-w-preview title=model.title contents=model.contents submitAction=(action 'submitAction')}}`);
  let resultingRender = this.$().text().trim();

  assert.notEqual(resultingRender.indexOf('Test Title'), -1);
  assert.notEqual(resultingRender.indexOf('Dummy Contents'), -1);
  assert.notEqual(resultingRender.indexOf('Edit'), -1);
  assert.notEqual(resultingRender.indexOf('Preview'), -1);
  assert.notEqual(resultingRender.indexOf('Submit'), -1);
});
