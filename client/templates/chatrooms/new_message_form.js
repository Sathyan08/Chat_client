Template.newMessageForm.created = function() {
  Session.set('messageSubmitErrors', {});
}

Template.newMessageForm.helpers({
  errorMessage: function(field) {
    return Session.get('messageSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('messageSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.newMessageForm.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $body = $(e.target).find('[name=body]');
    var message = {
      body: $body.val(),
      chatroomId: template.data._id
    };

    console.log(template.data._id);

    var errors = {};
    if (! message.body) {
      errors.body = "Please write some content";
      return Session.set('messageSubmitErrors', errors);
    }

    Meteor.call('messageInsert', message, function(error, messageId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});
