// for more details see: http://emberjs.com/guides/models/defining-models/

EmberTodo.ApiKey = DS.Model.extend({
  user: DS.belongsTo('EmberTodo.User'),
  accessToken: DS.attr('string'),
  scope: DS.attr('string'),
  expiredAt: DS.attr('date'),
  createdAt: DS.attr('date')
});
