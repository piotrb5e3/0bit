import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true,
    }
  },
  model(params) {
    if(!params.page) {
      this.transitionTo("posts");
    } else {
      let self = this;
      return new RSVP.Promise((resolve, reject) => {
        self.get('store').query('static-page', {url: params.page}).then((data) => {
          if(!data || data.get('length') !== 1) {
            reject();
          } else {
            resolve(data);
          }
        });
      });
    }
  }
});
