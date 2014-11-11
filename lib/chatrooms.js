Chatrooms = new Mongo.Collection('chatrooms');

Chatrooms.allow({
  insert: function(userId, doc){
    return !! userId;
  }
});
