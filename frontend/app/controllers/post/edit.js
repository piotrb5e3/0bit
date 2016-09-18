import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      let self = this;
      this.get('model').save().then(function success(){
        self.transitionToRoute("posts");
      }, function error(desc) {
        alert("Save failed:\n" + desc);
      });
    }
  }
});
