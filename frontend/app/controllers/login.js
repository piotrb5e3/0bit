import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  identification: "",
  password: "",
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:api-authenticator', identification, password).catch((reason) => {
        this.set('errorMessage', 'Authentication failed');
    });
    }
  }
});
