/* jshint node: true */
import PROD from 'prod';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      }
    },

    APP: {
      API_HOST: 'http://localhost:4200',
      API_NAMESPACE: 'api'
    }
  };

  if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:8000';
    ENV.APP.API_NAMESPACE = 'api';

    //Uncomment for development with the mirage server
    /*
    ENV.APP.API_HOST= 'http://localhost:4200';
    ENV.APP.API_NAMESPACE= 'api';
     */

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = PROD.API_HOST;
    ENV.APP.API_NAMESPACE = PROD.API_NAMESPACE;
  }

  return ENV;
};
