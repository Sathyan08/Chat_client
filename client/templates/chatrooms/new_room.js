Template.newRoom.created = function() {
  Session.set('newRoomErrors', {});
}

Template.newRoom.events({
  'submit form': function(e) {
    e.preventDefault();

    var room = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val()
    };

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

Template.newRoom.helpers({
  errorMessage: function(field) {
    return Session.get('newRoomErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('newRoomErrors')[field] ? 'has-error' : '';
  }
});
