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
    let fetchcb = function () {
      App.stopSpinner();
      MessagesView.render();
    };
    App.startSpinner();
    App.fetch(fetchcb);
    
    
  },

  render: function() {
    //check if Room.filter is defined, if it is defined, filter by it
    //need to wipe div in here
    let roomFilter = Rooms.filter;

    if (roomFilter === 'Default View') {
      roomFilter = null;
    }

    $('.chat').remove(); //this may be in an inappropriate place?
    //debugger;
    for (var msg in Messages.all.results) {
      if (roomFilter) {
        if (Messages.all.results[msg].roomname === roomFilter) {
          MessagesView.renderMessage(Messages.all.results[msg]);
        }
      } else {
        MessagesView.renderMessage(Messages.all.results[msg]);
      }
    }
    //need to apply friends styling here
    Friends.initialize();
    Friends.style();
  },

  renderMessage: function(messageObj) {
    let hasUser = messageObj.hasOwnProperty("username");
    let hasText = messageObj.hasOwnProperty("text");
    let hasRoom = messageObj.hasOwnProperty("roomname");
    let hasCreation = messageObj.hasOwnProperty("createdAt");
    
    if (!hasUser) {
      messageObj.username = 'ERRROR';
    }
    if (!hasText) {
      messageObj.text = 'ERRROR';
    }
    if (!hasRoom) {
      messageObj.roomname = 'ERRROR';
    }
    if (!hasCreation) {
      messageObj.createdAt = '0';
    }
    
    
    //messageObj.username = messageObj.username.replace(/\W/g, '');
    //messageObj.roomname = messageObj.roomname.replace(/\W/g, '');

    //render the message objec to reder format
    var $target = $('#chats');
    var message  = MessageView.render(messageObj);
    $($target).append(message);
  },
};