import Ember from 'ember';

export default Ember.Controller.extend({
  staticpageOrdering: Ember.inject.service('staticpageOrdering'),
  staticpagesSorting: ['order'],
  staticpages: Ember.computed.sort('model', 'staticpagesSorting'),
  orderlist: Ember.computed('staticpages', function() {
    return this.get('staticpages').map((sp) => {
      return sp.id;
    });
  }),
  actions: {
    spMoved(page, oldIndex, newIndex) {
      const staticpages = this.get('staticpages');
      staticpages.removeAt(oldIndex);
      staticpages.insertAt(newIndex, page);
    },
    submitNewOrder() {
      this.get('staticpageOrdering').sendOrdering(this.get('orderlist'))
        .then(() => {
          this.send('staticPagesReordered');
        }).catch((cause) => {
          console.log(cause);
      });
    }
  }
});
