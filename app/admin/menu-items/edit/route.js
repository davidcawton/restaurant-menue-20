import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('menu-item');
  },

  actions: {
    removeItem(formData) {
      let removeItem = this.get('admin.menu-items.edit');
      removeItem.deleteRecord(formData);
      removeItem.save().then(() => {
        this.transitionTo('admin.menu-items');
      });
    },

    saveItem(formData) {
      let menuItem = this.modelFor('admin.menu-items.edit');
      menuItem.setProperties(formData);
      menuItem.save().then(() => {
        this.transitionTo('admin.menu-items');
      });
    },
  },
});
