if (Chatrooms.find().count() === 0){
  Chatrooms.insert({
    title: "Team Discovery Channel",
    description: "Spring forth burly protector! Discuss the Simpsons"
  });
  Chatrooms.insert({
    title: "Macho Business Donkey Wrestling",
    description: "Discuss the autobiography of Jimmy James from News Radio"
  });
}
