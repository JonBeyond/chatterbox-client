var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  //this initialize sets up a listener to wait for the user to
  //  create a new room

  //grab all items in app.data
  //set up a listener for a new room
  },

  render: function() {
  // will update dropdown(list of room)
  },
  
  renderRoom: function(room) {
    
  },

  roomTemplate: _.template(`
      <option value ="<%-roomname%>"><%-roomname%></option>
    `)

};

/* form reference:

<select name="rooms">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>

*/