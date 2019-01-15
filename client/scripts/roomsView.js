var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#add-room').on('click', RoomsView.handleSubmit);
  },
  
  handleSubmit: function() {
    //literally all this does is get a prompt, send it to renderRoom, and then call
    //RoomsView.render?

    //get the room name from user:
    let submittedRoom = prompt();
    RoomsView.renderRoom(submittedRoom);
    //create a valid object for the template function
    // let newRoom = {};
    // newRoom.roomname = submittedRoom;

    //format the template
    // let formattedRoom = RoomsView.roomTemplate(newRoom);

    //add the roomname and template key:value to the room list.
    //note: it's ok if it's overwritten!
    // Rooms.list.submittedRoom = formattedRoom;

    //render the new form view:
    //RoomsView.render(); 
  },

  render: function() {
    // will update dropdown(list of room)
    //1) read the list of rooms available in messages.all,
    //     and create entries for each
    //wipe previous list
    
    for (let room in Rooms.list) {
      RoomsView.renderRoom(Rooms.list[room]);
    }

  },
  
  renderRoom: function(room) {
    //input: a string
    //output: the room added to the dropdown
    //debugger;
    //create an object so we can store it in Rooms.list
    let newRoom = {
      roomname: room
    };

    //format the new
    let formattedRoom = RoomsView.roomTemplate(newRoom);

    //add the roomname and template key:value to the room list.
    //note: it's ok if it's overwritten!
    Rooms.list.room = formattedRoom;

    $('#room-list').append(formattedRoom);
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