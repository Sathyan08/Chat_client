////////////////////////////////////////////////////////////////////////////////
////1. Start by generating variables and creating a dummy account //////////////
////////////////////////////////////////////////////////////////////////////////


//only seed the database if it has no chatrooms listed
if (Chatrooms.find().count() === 0) {

  //call the current time
  var now = new Date().getTime();

  //Create a user account
  var sathyanId = Meteor.users.insert({
    profile: { name: "Sathyan Test Account" }
  });

  //Call the user
  var sathyan = Meteor.users.findOne(sathyanId);

  //Create a second user for testing messages
  var angryInternetCitizenId = Meteor.users.insert({
    profile: { name: "Angry Internet Citizen" }
  });

  //Create a simple call for that user
  var angryInternetCitizen = Meteor.users.findOne(angryInternetCitizenId);

////////////////////////////////////////////////////////////////////////////////
////2. Create rooms now that you have the users and the time ///////////////////
////////////////////////////////////////////////////////////////////////////////

////A. Create objects for each desired room and store them as variables to call later

  var teamDiscoveryChannelId = Chatrooms.insert({
    title: "Team Discovery Channel",
    description: "Spring forth burly protector! Discuss the Simpsons",
    author: sathyan.profile.name,
    userId: sathyan._id,
    submitted: new Date(now)
  });

  var machoBusinessDonkeyWrestlingId = Chatrooms.insert({
    title: "Macho Business Donkey Wrestling",
    description: "Discuss the autobiography of Jimmy James from News Radio",
    author: sathyan.profile.name,
    userId: sathyan._id,
    submitted: new Date(now)
  });

  var chickenDanceId = Chatrooms.insert({
    title: "Chicken Dance",
    description: "Learn how to act with Carl Weathers",
    author: sathyan.profile.name,
    userId: sathyan._id,
    submitted: new Date(now)
  });

  var hallOfShameId = Chatrooms.insert({
    title: "Hall of Shame",
    description: "Pull yourself out of bed long enough to discuss U.S. Politics.",
    author: sathyan.profile.name,
    userId: sathyan._id,
    submitted: new Date(now)
  });
};


// if (Chatrooms.find().count() === 0){
//   Chatrooms.insert({
//     title: "Team Discovery Channel",
//     description: "Spring forth burly protector! Discuss the Simpsons",
//     author: 'Sathyan.Mathai@gmail.com'
//   });
//   Chatrooms.insert({
//     title: "Macho Business Donkey Wrestling",
//     description: "Discuss the autobiography of Jimmy James from News Radio",
//      author: 'Sathyan.Mathai@gmail.com'
//   });
//   Chatrooms.insert({
//     title: "Chicken Dance",
//     description: "Learn how to act with Carl Weathers",
//     author: 'Sathyan.Mathai@gmail.com'
//   });
//   Chatrooms.insert({
//     title: "Hall of Shame",
//     description: "Pull yourself out of bed long enough to discuss U.S. Politics.",
//     author: 'Sathyan.Mathai@gmail.com'
//   });
// }
