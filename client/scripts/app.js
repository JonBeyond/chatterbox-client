var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  data: null,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log(data); //for reference, keeping this
      App.data = data;
      Messages.all = data; //this will replace that was proexisitng 
      /*
        After fetching:
          1. Check for new rooms
          2. (optional) add new messages to the messages
          2b. (alternatively): reset all the meesages


*/
      
      
      //messages.data = data;
      //rooms.data = data; //only cares about rooms
      MessagesView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
