Template.chat.helpers({
  messages: function() {
    return Messages.find({chatroomId: this._id});
  }
});
