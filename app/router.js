import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('admin', function() {
    this.route('orders', function() {});

    this.route('menu-items', function() {
      this.route('new');

      this.route('edit',
      {  path: '/:menu-item._id',
      });
    });
  });

  this.route('menu', {
    path: '/',
  });
  this.route('order');
});

export default Router;
