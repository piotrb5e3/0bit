import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  sortedPosts: Ember.computed.sort('model', (a, b) => {
    return moment(a.get('date')).isAfter(b.get('date')) ?
      -1 :
      1;
  }),
  actions: {
    onPostChanged() {
      this.send('postChanged');
    }
  }
});
