import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(){
    return faker.company.bs();
  },
  contents(i) {
    return faker.lorem.paragraphs(i%5 + 1);
  },
  date(i) {
    if ( i%2 === 0) {
      return faker.date.past();
    } else {
      return faker.date.recent();
    }
  }
});
