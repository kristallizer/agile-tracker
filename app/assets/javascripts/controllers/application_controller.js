EmberTodo.ApplicationController = Ember.Controller.extend({
  currentUser: function() {
    // return EmberTodo.AuthManager.get('apiKey.user')
    return localStorage.getItem('user_email');
  }.property('EmberTodo.AuthManager.apiKey'),

  currentUserId: function() {
    return localStorage.getItem('user_id');
  }.property('EmberTodo.AuthManager.apiKey'),

  isAuthenticated: function() {
    return EmberTodo.AuthManager.isAuthenticated()
  }.property('EmberTodo.AuthManager.apiKey')
});
