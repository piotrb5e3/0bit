import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  staticpagesSorting: ['order'],
  staticpages: Ember.computed.sort('model', 'staticpagesSorting'),
  actions: {
    invalidateSession () {
      this.get('session').invalidate();
    }
  }
});
