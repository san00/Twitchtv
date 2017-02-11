
    var users = [ "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","ESL_SC2"];


  for(var i = 0; i < users.length; i++) {
  var apiResult = "https://wind-bow.gomix.me/twitch-api/channels/" + users[i];
  };

 function streaming() {

  var apiStream = "https://wind-bow.gomix.me/twitch-api/streams/" + users[i];

    $.ajax({
        url: apiResult,
        type: "GET",
        dataType: "jsonp",
        success: function(info) {
            console.log(info);


            // if (info.stream === null){
            //   $('#status').text('Offline');
            //   //  return 'Offline';
            // }
            //   else $('#status').text('Online');
            //   // return 'Online';

            // $("#name").append(info.display_name);
            // $("#streamers").append(info.logo);
            // $("#banner").append(info.video_banner);
            $("#status").append("<a href=" + info.url+ "> <img src=" + info.logo + "> " + info.display_name + " </a> " + " <p> " + info.game + " " + info.status +" </p>");

            $.ajax({
                url: apiStream,
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    console.log(data);
                    if (data.stream == null){
                      $('#onoroff').append('Offline');
                      //  return 'Offline';
                    }
                      else $('#onoroff').append('Online');
                      // return 'Online';
                  }
                });

        }
    })
}
