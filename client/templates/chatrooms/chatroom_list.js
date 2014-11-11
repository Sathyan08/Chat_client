var chatData = function(){
    return Chatrooms.find();
  };

Template.chatroomList.helpers({
  chatrooms: chatData
});
