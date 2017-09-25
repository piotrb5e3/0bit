import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  contents: DS.attr(),
  date: DS.attr('date'),
  lastEditedDate: DS.attr('date'),
});
