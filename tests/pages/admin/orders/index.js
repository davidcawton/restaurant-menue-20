import PageObject from 'restaurant-menue-20/tests/page-object';

//Destructuring//

let { visitable, collection, text } = PageObject;

export default PageObject.create({
  visit: visitable('/admin/orders'),

  //adminNav: Edit Menue Button & View Orders Button //
  //topNav: Edit Menue Button & View Orders Button //

  orders: collection({
    itemScope: '.order-detail',

    item: {
      orderItems: collection({
        itemScope: '.order-detail-order-item',

        item: {
          name: text('.order-detail-order-item__name'),
          quantity: text('.order-detail-order-item__quantity'),
          price: text('.order-detail-order-item__price'),
        },
      }),

      total: text('.order-detail__total'),
    },
  }),
});
