Meteor.publish('chatrooms', function() {
  return Chatrooms.find();
});

Meteor.publish('message', function(chatroomId) {
  return Comments.find();
  // check(chatroomId, String);
  // return Comments.find({chatroomId: chatroomId});
});
