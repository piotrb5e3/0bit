import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onPostChanged() {
      this.send('postChanged');
    }
  }
});
