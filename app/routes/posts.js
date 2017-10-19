import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('post', {
        published: true,
    });
  },
  actions: {
    postChanged() {
      this.refresh();
    }
  }
});
