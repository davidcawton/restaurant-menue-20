import DS from 'ember-data';

export default DS.Model.extend({
  paymentInfo: DS.attr('string'),
  shippingInfo: DS.attr('string'),
  customerInfo: DS.attr('number'),
  items: DS.hasMany('order-item'),
});
