if (Chatrooms.find().count() === 0){
  Chatrooms.insert({
    title: "Team Discovery Channel",
    description: "Spring forth burly protector! Discuss the Simpsons",
    author: 'Sathyan.Mathai@gmail.com'
  });
  Chatrooms.insert({
    title: "Macho Business Donkey Wrestling",
    description: "Discuss the autobiography of Jimmy James from News Radio",
     author: 'Sathyan.Mathai@gmail.com'
  });
  Chatrooms.insert({
    title: "Chicken Dance",
    description: "Learn how to act with Carl Weathers",
    author: 'Sathyan.Mathai@gmail.com'
  });
  Chatrooms.insert({
    title: "Hall of Shame",
    description: "Pull yourself out of bed long enough to discuss U.S. Politics.",
    author: 'Sathyan.Mathai@gmail.com'
  });
}
