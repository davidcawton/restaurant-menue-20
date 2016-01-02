import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addMenuItem(newItem) {
      let item = this.store.createRecord('newItem', newItem);
      addMenuItem.save().then(() => {
        this.transitionTo('admin');
      });
    },
  },
});
