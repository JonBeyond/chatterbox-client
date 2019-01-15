var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
  //grab the input from the box
  //--> need box name??
  //after we have the message, we need to:




  // 1. Put the message on the server
  //  --> we have a function for this
  // 2. Fetch the new message list
  // 3. Re-render the message view
  //
    
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};