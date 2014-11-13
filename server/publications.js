Meteor.publish('chatrooms', function() {
  return Chatrooms.find();
});

// Meteor.publish('comments', function() {
//   return Comments.find();
// });
