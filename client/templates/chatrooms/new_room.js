Template.newRoom.events({
  'submit form': function(e) {
    e.preventDefault();

    var room = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val()
    };

    // room._id = Chatrooms.insert(room);
    // Router.go('chat', room);
    Meteor.call('roomInsert', room, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);

      // show this result but route anyway
      if (result.roomExists)
        throwError('This chatroom has already been posted');

      Router.go('chat', {_id: result._id});
    });
  }
});
