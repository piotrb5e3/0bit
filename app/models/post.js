import DS from 'ember-data';
import { memberAction } from 'ember-api-actions';

export default DS.Model.extend({
  title: DS.attr(),
  contents: DS.attr(),
  date: DS.attr('date'),
  lastEditedDate: DS.attr('date'),
  published: DS.attr('boolean'),
  publish: memberAction({
    path: 'publish/',
    type: 'POST',
  }),
  unpublish: memberAction({
    path: 'unpublish/',
    type: 'POST',
  }),
});
