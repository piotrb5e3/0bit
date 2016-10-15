import Ember from 'ember';

export default Ember.Controller.extend({
  staticpageOrdering: Ember.inject.service('staticpageOrdering'),
  staticpages: Ember.computed('model', function () {
    let arr = this.get('model').toArray();
    return arr;
  }),
  errmsg: "",
  successmsg: "",
  msgObserver: Ember.observer('staticpages', function() {
    this.set('errmsg', "");
    this.set('succerrmsg', "");
  }),
  orderlist: Ember.computed('staticpages', function() {
    return this.get('staticpages').map((sp) => {
      return sp.id;
    });
  }),
  actions: {
    submitNewOrder() {
      let self = this;
      this.get('staticpageOrdering').sendOrdering(this.get('orderlist'))
        .then(function() {
          self.set('successmsg', 'Reorder successful. Refresh the page to see changes');
          self.set('errmsg', '');
        }).catch((cause) => {
        self.set('successmsg', '');
        self.set('errmsg', 'Reorder failed. Cause: ' + cause);
      });
    }
  }
});
