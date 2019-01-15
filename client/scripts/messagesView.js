var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    // set a interval for updating the messages regularly
    // completely wipe the chat div
    // re-render
    //MessagesView.render();

    //MessagesView.
    $('#refresh-all').on('click', MessagesView.handleSubmit);


  },

  handleSubmit: function(event) {
    //fetch data
    //then render?
    App.startSpinner()
    App.fetch(App.stopSpinner);
    
  },

  render: function(roomFilter, friendFilter) {
    //need to wipe div in here
    $('.chat').remove(); //this may be in an inappropriate place?
  
    for (var msg in Messages.all.results) {
      MessagesView.renderMessage(Messages.all.results[msg]);
    }
  },

  renderMessage: function(messageObj) {
    let hasUser = messageObj.hasOwnProperty("username");
    let hasText = messageObj.hasOwnProperty("text");
    let hasRoom = messageObj.hasOwnProperty("roomname");
    let hasCreation = messageObj.hasOwnProperty("createdAt");
    
    if (!hasUser) {
      messageObj.username = 'ERR: unknown user';
    }
    if (!hasText) {
      messageObj.text = 'ERR: no message specified';
    }
    if (!hasRoom) {
      messageObj.roomname = 'ERR: no room specified';
    }
    if (!hasCreation) {
      messageObj.createdAt = '0';
    }



    //render the message objec to reder format
    var $target = $('#chats');
    var message  = MessageView.render(messageObj);
    $($target).append(message);
  },
};