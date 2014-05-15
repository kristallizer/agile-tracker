// for more details see: http://emberjs.com/guides/models/defining-models/

EmberTodo.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  username: DS.attr('string'),
  // projects: DS.hasMany('project'),

  errors: {}
});
