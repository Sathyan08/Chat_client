Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound',
  waitOn: function(){ return [
    Meteor.subscribe('chatrooms'),
    Meteor.subscribe('messages')
    ]}
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}


Router.route('/', {name: 'chatroomList'});
Router.route('/chatrooms/:_id', {
  name: 'chat',
  data: function() { return Chatrooms.findOne(this.params._id); }
});

Router.route('/chatrooms/:_id/edit', {
  name: 'roomEdit',
  data: function() { return Chatrooms.findOne(this.params._id); }
});

Router.route('/new', {name: 'newRoom'});

Router.onBeforeAction(requireLogin, {only: 'newRoom'});
