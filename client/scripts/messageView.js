var MessageView = {
//<%- username %>
//        <div>Sent at: <%- createdAt %></div>
  render: _.template(`
      
      <div class="chat">
        <div class="<%- username %>">Sent by: <%- username %></div> 
        <div class="timestamp">Sent at: <%- createdAt %></div> 
        <div>Message content: <%- text %></div>
        <div>Sent to room: <%- roomname %></div>
      </div>
      
    `)

};