EmberTodo.Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  // user: DS.belongsTo('user'),
  tasks: DS.hasMany('task', {
    async: true
  })
});


