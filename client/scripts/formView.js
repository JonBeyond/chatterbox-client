var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('#room-list').change(function(){
      let room = $('#rooms select').children("option:selected").val();
      MessagesView.render(room);
    });    
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let userMessage = $('#message').val();
    let user = App.username; //username

    //update the below***************
    let room = $('#rooms select').children("option:selected").val(); //need to define this at some point...

    let fullMessage = {
      username: user,
      text: userMessage,
      roomname: room
    };
    let fetchcb2 = function () {
      App.stopSpinner();
      MessagesView.render();
    };
    let fetchcb = function () {
      App.fetch(fetchcb2);
    };

    App.startSpinner();
    Parse.create(fullMessage, fetchcb);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};