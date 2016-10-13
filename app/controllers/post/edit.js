import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  editedTitle: Ember.computed.oneWay('model.title'),
  editedContents: Ember.computed.oneWay('model.title'),
  actions: {
    submitPost(newpost) {
      if (!this.get('session').get("isAuthenticated")) {
        this.transitionToRoute("login");
      } else {
        let self = this;
        let model = this.get('model');
        model.set('title', newpost.title);
        model.set('contents', newpost.contents);
        model.save().then(function success() {
          self.transitionToRoute("posts");
        }, function error(desc) {
          this.get('model').rollbackAttributes();
          alert("Save failed:\n" + desc);
        });
      }
    }
  }
});
