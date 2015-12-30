import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name() {
    return faker.company.bs();
  },

  description() {
    return faker.hacker.phrase();
  },

  price() {
    return faker.finance.amount(0, 40);
  },

  category(index) {
    return [
      'Drink',
      'Apple',
      'Entree',
    ] [index % 3];
  },
});
