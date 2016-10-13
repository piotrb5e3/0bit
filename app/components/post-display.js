import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel', 'panel-default', 'post-display'],
  tagName: "article",
  isPreview: false
});
