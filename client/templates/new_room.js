Template.newRoom.events({
  'submit form': function(e) {
    e.preventDefault();

    var room = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val()
    };

    room._id = Chatrooms.insert(room);
    Router.go('chat', room);
  }
});
