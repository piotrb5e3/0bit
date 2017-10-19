import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    postChanged() {
      this.refresh();
    }
  }
});
