import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  title: "",
  contents: "",
  validations: {
    title: {
      presence: true,
      length: {
        minimum: 3
      }
    },
    contents: {
      presence: true,
      length: {
        minimum: 3
      }
    }
  },
  newpost: Ember.computed('title', 'contents', function(){
    return {
      title: this.get('title'),
      contents: this.get('contents'),
      date: new Date(),
      published: true,
    };
  })
});
