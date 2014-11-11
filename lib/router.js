Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound',
  // waitOn: function(){ return Meteor.subscribe('chatrooms') }
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
  name: 'chat'
});

Router.route('/new', {name: 'newRoom'});

Router.onBeforeAction(requireLogin, {only: 'newRoom'});
