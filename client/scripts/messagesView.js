var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    // set a interval for updating the messages regularly
    // completely wipe the chat div
    // re-render
    //MessagesView.render();


  },

  render: function() {
    //need to wipe div in here
    var $target = $('#chats');
    $('.chat').remove();
    
    for(var msg in App.data.results) {
      if (App.data.results[msg].hasOwnProperty("username")) { //we may need to add additional verifications later for missing keys
        var message  = MessageView.render(App.data.results[msg]);
        $($target).append(message);
      }
      
    }
    
  }

};