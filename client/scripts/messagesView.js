var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    // set a interval for updating the messages regularly
    // completely wipe the chat div
    // re-render
    //MessagesView.render();


  },

  render: function(roomFilter, friendFilter) {
    //need to wipe div in here
    $('.chat').remove(); //this may be in an inappropriate place?
  
    for(var msg in Messages.all.results) {


      if (Messages.all.results[msg].hasOwnProperty("username")) { //we may need to add additional verifications later for missing keys
        MessagesView.renderMessage(Messages.all.results[msg])
      }



    }
  },

  renderMessage: function(messageObj) {
    //render the message objec to reder format
    var $target = $('#chats');
    var message  = MessageView.render(messageObj);
    $($target).append(message);
  },
};