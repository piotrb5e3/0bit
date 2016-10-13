import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('tryLogout', function() {
  click('#main-navbar a:contains(Logout)');
});
