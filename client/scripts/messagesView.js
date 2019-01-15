var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    for(var msg in App.data.results) {
      var message  = MessageView.render(App.data.results[msg]);
      $('#chats').append(message);
    }
    
  }

};