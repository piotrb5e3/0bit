import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    submitPost() {
      if (!this.get('session').get("isAuthenticated")) {
        this.transitionToRoute("login");
      } else {
        let self = this;
        this.get('model').save().then(function success() {
          self.transitionToRoute("posts");
        }, function error(desc) {
          this.get('model').rollbackAttributes();
          alert("Save failed:\n" + desc);
        });
      }
    }
  }
});
