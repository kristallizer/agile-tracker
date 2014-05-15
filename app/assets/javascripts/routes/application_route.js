EmberTodo.ApplicationRoute = Ember.Route.extend({
  init: function() {
    this._super();
    EmberTodo.AuthManager = AuthManager.create();
  },

  actions: {
    logout: function() {
      EmberTodo.AuthManager.reset();
      // this.transitionTo('projects');
    }
  }
});
