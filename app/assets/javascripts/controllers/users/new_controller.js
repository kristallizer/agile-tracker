EmberTodo.UsersNewController = Ember.ObjectController.extend({
  actions: {
    createUser: function() {
      var router = this.get('target');
      var data = this.getProperties('name', 'email', 'username',
                                    'password', 'password_confirmation');
      var user = this.get('model');

      $.post('/users', {user: data}, function(results) {
        EmberTodo.AuthManager.authenticate(results.api_key.access_token,
                                           results.api_key.user_id);
        router.transitionTo('projects');
      }).fail(function(jqxhr, textStatus, error) {
        if (jqxhr.status == 422) {
          errs = JSON.parse(jqxhr.responseText)
          alert(errs);
          user.set('errors', errs.errors);
        }
      });
    }
  }
});
