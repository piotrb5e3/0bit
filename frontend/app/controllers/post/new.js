import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    submit(newpost) {
      if(! this.get('session').get("isAuthenticated")) {
        this.transitionToRoute("login");
      }
      let self = this;
      let record = this.get('store').createRecord('post');
      record.set("title", newpost.title);
      record.set("contents", newpost.contents);
      record.save().then(function success(){
        self.transitionToRoute("posts");
      }, function error(desc) {
        alert("Save failed:\n" + desc);
      });
    }
  }
});
