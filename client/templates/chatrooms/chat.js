Template.chat.helpers({
  messages: function() {
    return Messages.find({messageId: this._id});
  }
});
