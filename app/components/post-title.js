import Ember from 'ember';

import moment from 'moment';


export default Ember.Component.extend({
  classNames: ['panel-heading'],
  session: Ember.inject.service('session'),
  openModal: false,
  shouldDisplayLastEdited: Ember.computed('post', function() {
    const creationDate = this.get('post.date');
    const lastEditedDate = this.get('post.lastEditedDate');
    if(lastEditedDate === undefined || lastEditedDate === null) {
      return false;
    }
    return ! moment(lastEditedDate).isBetween(
      moment(creationDate),
      moment(creationDate).add(2, 'h')
    );
  }),
  actions: {
    askConfirm() {
      this.set('openModal', true);
    },
    yesDelete() {
      this.get('post').destroyRecord().then(() => {
        this.get('router').transitionTo('');
      });
    },
    noDelete() {
      this.set('openModal', false);
    }
  }
});
