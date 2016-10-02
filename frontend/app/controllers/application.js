import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  staticpages: Ember.computed.alias('model'),
  actions: {
    invalidateSession () {
      this.get('session').invalidate();
    }
  }
});
