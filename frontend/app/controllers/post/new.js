import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit(newpost) {
      let self = this;
      this.get('store').createRecord('post', {
        title: newpost.title,
        contents: newpost.contents,
        date: new Date()
      }).save().then(function success(){
        self.transitionToRoute("posts");
      }, function error(desc) {
        alert("Save failed:\n" + desc);
      });
    }
  }
});
