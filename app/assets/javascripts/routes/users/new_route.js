EmberTodo.UsersNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controller.set('model', this.store.createRecord('user'));
  }
});
