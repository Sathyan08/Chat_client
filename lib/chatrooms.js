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
////////

validateChatroom = function (chatroom) {
  var errors = {};

  if (!chatroom.title)
    errors.title = "Please fill in a title";

  if (!chatroom.description)
    errors.description =  "Please fill in a description";

  return errors;
}

Meteor.methods({
  roomInsert: function(chatroomAttributes) {
    check(this.userId, String);
    check(chatroomAttributes, {
      title: String,
      description: String
    });

    var errors = validateChatroom(chatroomAttributes);
    if (errors.title || errors.description)
      throw new Meteor.Error('invalid-submission', "You must set a title and description for your chatroom");

    var chatroomWithSameTitle = Chatrooms.findOne({title: chatroomAttributes.title});
    if (chatroomWithSameTitle) {
      return {
        chatroomExists: true,
        _id: chatroomWithSameTitle._id
      }
    }

    var user = Meteor.user();
    var chatroom = _.extend(chatroomAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var chatroomId = Chatrooms.insert(chatroom);

    return {
      _id: chatroomId
    };
  }
});

Chatrooms.deny({
  update: function(userId, chatroom, fieldNames, modifier) {
    var errors = validateChatroom(modifier.$set);
    return errors.title || errors.description;
  }
});
