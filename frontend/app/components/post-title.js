import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel-heading'],
  session: Ember.inject.service('session')
});
