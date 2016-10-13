import Ember from 'ember';

export default Ember.Component.extend({
  title: "",
  contents: "",
  url: "",
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
    },
    url: {
      presence: true,
      length: {
        minimum: 3
      }
    },
  },
  newpage: Ember.computed('title', 'contents', 'url', function(){
    return {
      title: this.get('title'),
      contents: this.get('contents'),
      url: this.get('url')
    };
  })
});
