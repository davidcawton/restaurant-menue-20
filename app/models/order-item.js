import DS from 'ember-data';

export default DS.Model.extend({
  priceWhenPurchased: DS.attr('number'),
  quantity: DS.attr('number'),
  menuItem: DS.belongsTo('menu-item'),
});
