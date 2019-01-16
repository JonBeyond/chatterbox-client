var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  data: null,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    MessagesView.initialize();
    RoomsView.initialize();
    Friends.initialize();
    // Fetch initial batch of messages
    App.startSpinner();

    let initialFetchCallback = function () {
      App.stopSpinner();
      MessagesView.render();
      RoomsView.render();
    };

    App.fetch(initialFetchCallback);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log(data); //for reference, keeping this
      Messages.all = data; //this will replace that was proexisitng 
      Messages.checkValidity();
      Rooms.parseRoom(data);      
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
