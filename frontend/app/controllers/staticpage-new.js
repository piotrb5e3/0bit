import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    submitPage(newpage) {
      if (!this.get('session').get("isAuthenticated")) {
        this.transitionToRoute("login");
      } else {
        let self = this;
        let record = this.get('store').createRecord('staticPage');
        record.set("title", newpage.title);
        record.set("contents", newpage.contents);
        record.set("url", newpage.url);
        record.save().then(() => {
          self.transitionToRoute("application");
        }).catch((desc) => {
          record.deleteRecord();
          alert("Save failed:\n" + desc);
        });
      }
    }
  }
});
