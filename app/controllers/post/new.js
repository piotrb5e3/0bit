import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    submitPost(newpost) {
      if (!this.get('session').get("isAuthenticated")) {
        this.transitionToRoute("login");
      } else {
        let self = this;
        let record = this.get('store').createRecord('post');
        record.set("title", newpost.title);
        record.set("contents", newpost.contents);
        record.save().then(() => {
          self.transitionToRoute("posts");
        }).catch((desc) => {
          record.deleteRecord();
          alert("Save failed:\n" + desc);
        });
      }
    }
  }
});
