import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(){
    return faker.company.bs();
  },
  contents() {
    return faker.lorem.paragraph();
  },
  date(i) {
    if ( i%2 === 0) {
      return faker.date.past();
    } else {
      return faker.date.recent();
    }
  }
});
