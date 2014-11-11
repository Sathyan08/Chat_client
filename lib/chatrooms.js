Chatrooms = new Mongo.Collection('chatrooms');

Chatrooms.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});
