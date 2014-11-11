Template.roomListing.helpers({
  ownRoom: function() {
    return this.userId === Meteor.userId();
  }
});
