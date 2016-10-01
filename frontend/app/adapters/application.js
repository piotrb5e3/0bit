import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'frontend/config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:api-authorizer',
  host: ENV.apiHost,
  namespace: ENV.apiNamespace
});
