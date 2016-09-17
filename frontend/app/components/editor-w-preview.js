import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  title: "",
  contents: "",
  date: new Date(),
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
  newpostObserver: Ember.observer('title', 'contents', 'date', function(){
    this.set('newpost',{
      title: this.get('title'),
      contents: this.get('contents'),
      date: this.get('date')
    });
  })
});
