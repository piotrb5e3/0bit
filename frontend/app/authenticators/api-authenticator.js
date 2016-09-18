import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  ajax: Ember.inject.service(),
  loginPath: "api/login",
  logoutPath: "api/logout",

  restore() {
  },

  authenticate(login, pass) {
    return this.get('ajax').request(this.get("loginPath"), {
      method: 'POST',
      data: {
        username: login,
        password: pass
      }
    });
  },

  invalidate() {
    return this.get('ajax').request(this.get("logoutPath"), {
      method: 'GET'
    });
  }
});
