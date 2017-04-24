import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  metrics: Ember.inject.service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');

      Ember.get(this, 'metrics').trackPage({page, title});
    });
  }
});

Router.map(function () {
  this.route('posts', function () {
  });

  this.route('post', function () {
    this.route('new');
    this.route('show', {path: ":post_id"});
    this.route('edit', {path: ":post_id/edit"});
  });
  this.route('login');
  this.route('error', {path: '/*wildcard'});
  this.route('loading');
  this.route('staticpage-new', {path: '/sp-new'});
  this.route('staticpage-edit', {path: '/sp-edit/:staticpage_id'});
  this.route('staticpage-order', {path: '/sp-order'});
  this.route('test-sentry');
});

export default Router;
