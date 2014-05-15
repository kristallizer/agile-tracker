// Reference: http://coderberry.me/blog/2013/07/08/authentication-with-emberjs-part-2/

var AuthManager = Ember.Object.extend({
  // Load the current user if the cookies exist and is valid
  init: function() {
    this._super();
    var accessToken = localStorage.getItem('access_token');
    var authUserId = localStorage.getItem('user_id');
    var authUserEmail = localStorage.getItem('user_email');
    if(!Ember.isEmpty(accessToken) && !Ember.isEmpty(authUserId)) {
      this.authenticate(accessToken, authUserId);
    }
  },

  // Determine if the user is currently authenticated.
  isAuthenticated: function() {
    return !Ember.isEmpty(this.get('apiKey.accessToken')) && !Ember.isEmpty(this.get('apiKey.user'));
  },

  // Authenticate the user. Once they are authenticated, set the access token
  // to be submitted with all future AJAX requests to the server
  authenticate: function(accessToken, userId) {
    $.ajaxSetup({
      headers: { 'Authorization': 'Bearer ' + accessToken}
    });
    var store = EmberTodo.__container__.lookup('store:main');
    var that = this;
    var user = store.find('user', userId).then(function(result) {
      that.set('apiKey', EmberTodo.ApiKey.create({
        accessToken: accessToken,
        user: result
    }))});

    this.set('apiKey', EmberTodo.ApiKey.create({
      accessToken: accessToken,
      user: user
    }));
  },

  // Log out the user
  reset: function() {
    EmberTodo.__container__.lookup('route:application').transitionTo('sessions.new');
    Ember.run.sync();
    Ember.run.next(this, function(){
      this.set('apiKey', null);
      $.ajaxSetup({
        headers: {'Authorization': 'Bearer none'}
      })
    })
  },

  // Ensure that when the apiKey changes, we store the data in cookies in order
  // for us to load the user when the browser is refreshed
  apiKeyObserver: function() {
    if (Ember.isEmpty(this.get('apiKey'))) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_email');
    } else {
      localStorage.setItem('access_token', this.get('apiKey.accessToken'));
      localStorage.setItem('user_id', this.get('apiKey.user.id'));
      localStorage.setItem('user_email', this.get('apiKey.user.email'));
    }
  }.observes('apiKey')
});

DS.rejectionHandler = function(reason) {
  if (reason.status === 401) {
    EmberTodo.AuthManager.reset();
  }
  throw reason;
}
