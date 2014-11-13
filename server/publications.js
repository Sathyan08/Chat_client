Meteor.publish('chatrooms', function() {
  return Chatrooms.find();
});

Meteor.publish('messages', function() {
  return Messages.find();
});
