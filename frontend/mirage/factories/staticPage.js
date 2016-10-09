import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(){
    return faker.company.bsNoun();
  },
  url(){
    return faker.company.bsBuzz();
  },
  contents(i) {
    return faker.lorem.paragraphs(i%5 + 1);
  }
});
