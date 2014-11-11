Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound',
  // waitOn: function(){ return Meteor.subscribe('chatrooms') }
});

Router.route('/', {name: 'chatroomList'});
Router.route('/chatrooms/:_id', {
  name: 'chat'
});

Router.route('/new', {name: 'newRoom'});
