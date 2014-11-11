Chatrooms = new Mongo.Collection('chatrooms');

Chatrooms.allow({
 insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  // insert: function(userId, chat) { return ownsDocument(userId, chat); },
  update: function(userId, chat) { return ownsDocument(userId, chat); },
  remove: function(userId, chat) { return ownsDocument(userId, chat); },
});

Chatrooms.deny({
  update: function(userId, chat, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'title', 'description').length > 0);
  }
});
