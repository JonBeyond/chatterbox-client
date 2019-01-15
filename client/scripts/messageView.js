var MessageView = {
//<%- username %>
  render: _.template(`
      
      <div class="chat">
        <div class="<%- username %>"></div> 
        <div>Sent at: <%- createdAt %></div>
        <div><%- text %></div>
      </div>
      
    `)

};