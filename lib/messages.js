Messages = new Mongo.Collection('messages');

Meteor.methods({
  messageInsert: function(messageAttributes) {
    check(this.userId, String);
    check(messageAttributes, {
      messageId: String,
      body: String
    });
    var user = Meteor.user();
    var newMessage = Messages.findOne(messageAttributes.messageId);
    if (!post)
      throw new Meteor.Error('invalid-message', 'You can only submit text');
    newMessage = _.extend(messageAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    return Messages.insert(newMessage);
  }
});
