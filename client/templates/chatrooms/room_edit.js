Template.roomEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentRoomId = this._id;

    var roomProperties = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val()
    }

    Chatrooms.update(currentRoomId, {$set: roomProperties}, function(error) {
      if (error) {
        // display the error to the user
           throwError(error.reason);
      } else {
        Router.go('chat', {_id: currentRoomId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this Chatroom?")) {
      var currentRoomId = this._id;
      Chatrooms.remove(currentRoomId);
      Router.go('chat');
    }
  }
});
