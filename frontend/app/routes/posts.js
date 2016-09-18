import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let self = this;
    return new Promise(function(resolve) {
      self.get('store').findAll('post').then(function(model) {
        resolve(model.toArray().sort((a, b) => {
          return a.get('date') < b.get('date');
          }));
      });
    });
  }
});
