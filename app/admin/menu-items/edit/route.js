import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('menu-item');
  },

  actions: {
    saveItem(formData) {
      let menuItem = this.modelFor('admin.menu-items.edit');
      menuItem.setProperties(formData);
      menuItem.save().then(() => {
        this.transitionTo('admin.menu-items');
      });
    },
  },
});
