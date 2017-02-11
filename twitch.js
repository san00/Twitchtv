
    var users = [ "ESL_SC2","freecodecamp","OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404"];

    var userName =[];
    var userLogo =[];
    var userStatus = [];
    var userURL = [];
    var userOnline = [];
    var userStream = [];
    var userGame = [];

  for(var i = 0; i < users.length; i++) {
    var apiResult = "https://wind-bow.gomix.me/twitch-api/channels/" + users[i];

    streaming(i);
  };

 function streaming() {

  var apiStream = "https://wind-bow.gomix.me/twitch-api/streams/" + users[i];

    $.ajax({
        url: apiResult,
        type: "GET",
        dataType: "jsonp",
        success: function(info) {
            console.log(info);

            userName[i] = info.display_name;
            userLogo[i] = ("<img src=" + info.logo + ">")
            userStatus[i] = info.status;
            userURL[i] = info.url;

              // $("#status").append(userLogo[i] + " " + " " + userName[i] + "<br></br>"+ userStatus[i] + " "  +  "<br></br>" );

              $.ajax({
                  url: apiStream,
                  type: "GET",
                  dataType: "jsonp",
                  success: function(data) {
                    userName[i] = info.display_name;
                    userLogo[i] = ("<img src=" + info.logo + ">")
                    userStatus[i] = info.status;
                    userURL[i] = info.url;
                      console.log(data);
                      if (data.stream === null){
                        userOnline[i] = "Offline";
                      }
                        else{
                        userOnline[i] = "Online";
                      }
                        $("#status").append(userLogo[i] + " " + " " + userName[i] + "<br></br>"+ " " +userStatus[i] + " "  + userOnline[i]+ " " + "<br></br>" );
                    }
                  });
            }
        })
};
