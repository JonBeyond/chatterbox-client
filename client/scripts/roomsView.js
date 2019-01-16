var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#add-room').on('click', RoomsView.handleSubmit);
  },
  
  handleSubmit: function() {
    //get the room name from user:
    let submittedRoom = prompt();
    RoomsView.renderRoom(submittedRoom);


    //we will need a handler here for when the user selects a room, to filter by it


  },

  render: function() {

    //wipe previous list?
    
    for (let room in Rooms.list) {
      RoomsView.renderRoom(Rooms.list[room]);
    }

  },
  
  renderRoom: function(room) {
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