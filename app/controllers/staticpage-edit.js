import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  editedTitle: Ember.computed.oneWay('model.title'),
  editedUrl: Ember.computed.oneWay('model.url'),
  editedContents: Ember.computed.oneWay('model.contents'),
  actions: {
    submitPage(newpage) {
      if(!this.get('session').get("isAuthenticated")) {
        this.transitionToRoute("login");
      } else {

        let self = this;
        let model = this.get('model');

        model.set("title", newpage.title);
        model.set("contents", newpage.contents);
        model.set("url", newpage.url);

        model.save().then(function success() {
          self.transitionToRoute("application");
        }, function error(desc) {
          model.rollbackAttributes();
          alert("Save failed:\n" + desc);
        });
      }
    }
  }
});
