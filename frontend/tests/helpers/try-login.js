import Ember from 'ember';

export default Ember.Test.registerHelper('tryLogin', function(app, username, password) { // jshint ignore:line
  visit('/login');
  fillIn('#login-username-field', username);
  fillIn('#login-password-field', password);
  andThen(() => {
    click('#login-submit');
  });
});
