Chatrooms = new Mongo.Collection('chatrooms');

Chatrooms.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Chatrooms.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'title', 'description').length > 0);
  }
});
