var Friends = {
  friendList: {}, //push friends into this.

  initialize: function() {
    // 1) wait for an event (click) on a class="username"
    // --> we need to 
    $('.chat').click(function (event) {
      //with Jquery, using this will refer to the specific
      // element that was clicked on
      let user = $(this).attr('id');
      user.replace(/\W/g, '');
      Friends.friendList[user] = user;
      Friends.style();
    });
  },
  
  style: function () {
    for (let friend in Friends.friendList) {
      let $target = '#' + friend;
      //need to validate $target
      $('#chats '+ $target).css('background', 'green');
    }
  }
};