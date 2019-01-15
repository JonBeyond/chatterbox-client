var MessageView = {
//<%- username %>
//        <div>Sent at: <%- createdAt %></div>
  render: _.template(`
      
      <div class="chat">
        <div class="<%- username %>"></div> 
        <div><%- text %></div>
      </div>
      
    `)

};