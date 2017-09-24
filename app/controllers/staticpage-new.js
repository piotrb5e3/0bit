import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    submitPage() {
      if (!this.get('session').get("isAuthenticated")) {
        this.transitionToRoute("login");
      } else {
        let model = this.get('model');
        model.save().then(() => {
          this.transitionToRoute("application");
        }).catch(() => {
        });
      }
    }
  }
});
