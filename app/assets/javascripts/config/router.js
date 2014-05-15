EmberTodo.Router.reopen({
  location: 'history'
});

EmberTodo.Router.map(function(){
  this.resource('sessions', function() {
    this.route('new');
  })
  this.resource('users', function() {
    this.route('new');
  })

  this.resource('projects');
  this.resource('project', { path: 'project/:project_id' }, function() {
  });

  // this.resource('tasks', { path: 'projects/tasks' });
  // this.resource('task', { path: 'projects/tasks/:task_id' });

  // this.resource('projects', function() {
  //   this.resource('project', { path: ':project_id' }, function() {
  //     this.resource('tasks', function() {
  //       this.resource('task', { path: ':task_id' });
  //     });
  //   }
  // });
});


