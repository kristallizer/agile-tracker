EmberTodo.ProjectsController = Ember.ArrayController.extend({
  needs: 'application',
  newProjectName: '',
  newProjectDescription: '',
  isNewing: false,

  userObj: '',
  // userObj: this.__container__.lookup('store:main').find('user', this.get('controllers.application.currentUserId')),

  actions: {
    showNewForm: function() {
      return this.set('isNewing', true);
    },
    cancel: function() {
      return this.clear();
    },
    createNewProject: function() {
      // alert(this.store.find('user', this.get('controllers.application.currentUserId')));
      var project,
        _this = this;

      // var user = this.store.find('user', this.get('controllers.application.currentUserId'));
      // user.then(function() {

        project = this.store.createRecord('project', {
          name: this.get('newProjectName'),
          description: this.get('newProjectDescription')
          // user: user
        });

      // })

     // project = this.store.createRecord('project', {
     //    name: this.get('newProjectName'),
     //    description: this.get('newProjectDescription'),
     //    user: this.store.find('user', user)
     //  });

      return project.save().then(function(model) {
        _this.clear();
        _this.store.push('project', model.get('data'));
        return _this.transitionToRoute('project', model);
      });
    },
    deleteProject: function(project) {
      project.deleteRecord();
      return project.save();
    }
  },
  clear: function() {
    this.set('isNewing', false);
    this.set('newProjectName', '');
    return this.set('newProjectDescription', '');
  }
});


