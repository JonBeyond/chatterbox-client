var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let userMessage = $('#message').val();
    let user = App.username; //username
    let room = 'TBD'; //need to define this at some point...

    let fullMessage = {
      username: user,
      text: userMessage,
      roomname: room
      }
    
    let fetchcb = function () {
      App.startSpinner();
      App.fetch(App.stopSpinner)
    }

    let fetch = function () {
      fetchcb();
    }

    Parse.create(fullMessage, fetch);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};