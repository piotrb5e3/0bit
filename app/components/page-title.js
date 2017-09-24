import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel-heading'],
  session: Ember.inject.service('session'),
  openModal: false,
  actions: {
    askConfirm() {
      this.set('openModal', true);
    },
    yesDelete() {
      this.get('page').destroyRecord().then(() => {
        this.get('router').transitionTo('');
      });
    },
    noDelete() {
      this.set('openModal', false);
    }
  }
});
