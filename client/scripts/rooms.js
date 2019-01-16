var Rooms = {
  list: {
    'Default View': 'Default View'
  }, //key = room name, value = template
  filter: 'Default View',
  parseRoom: function (data) {
    for (let message in data.results) {
      var room = data.results[message].roomname;
      
      Rooms.list[room] = room;
    

    }
  }
};