EmberTodo.ProjectsRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('project');
  }
});


