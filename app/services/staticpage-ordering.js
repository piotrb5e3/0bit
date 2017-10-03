import Ember from 'ember';
import ENV from 'ComfyMS-frontend/config/environment';
import RSVP from 'rsvp';

const namespace_block = (ENV.APP.API_NAMESPACE ? `/${ENV.APP.API_NAMESPACE}` : "");

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service('session'),
  orderingPath: `${ENV.APP.API_HOST}${namespace_block}/sp-reorder`,

  sendOrdering(orderingList){
    if (!this.get('session').get("isAuthenticated")) {
      return new RSVP.Promise((resolve, fail) => {
        fail("Not logged in.");
      });
    }
    let self = this;
    return new RSVP.Promise(function (resolve, fail) {
      self.get('session').authorize('authorizer:api-authorizer', (headerName, headerValue) => {
        self.get('ajax').post(self.get("orderingPath"), {
          data: JSON.stringify({
            order: orderingList
          }),
          beforeSend: function (request) {
            request.setRequestHeader(headerName, headerValue);
          }
        }).then(function () {
          resolve();
        }).catch(function (err) {
          fail(err);
        });
      });
    });
  }
});
