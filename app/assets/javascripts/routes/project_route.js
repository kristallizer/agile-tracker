EmberTodo.ProjectRoute = AuthenticatedRoute.extend({
  model: function(params) {
    return this.store.find('project', params.project_id);
  }
});


