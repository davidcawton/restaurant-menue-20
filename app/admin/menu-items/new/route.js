import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addMenuItem(formData) {
      let menuItem = this.store.createRecord('menu-item');
      menuItem.setProperties(formData);
      menuItem.save().then(() => {
        this.transitionTo('admin.menu-items');
      });
    },
  },
});
