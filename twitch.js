   $(document).ready(function() {
       var users = ["ESL_SC2", "freecodecamp", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

      //  var userName = [];
       var userLogo;
      //  var userStatus = [];
       var userURL = [];
       var userOnline;
      //  var message = [];


       for (var i = 0; i < users.length; i++) {
           var apiResult = "https://wind-bow.gomix.me/twitch-api/channels/" + users[i];

           streaming(i);
       };

       function streaming() {

           var apiStream = "https://wind-bow.gomix.me/twitch-api/streams/" + users[i];

           $.ajax({
               url: apiResult,
               dataType: "jsonp",
               success: function(info) {

                  //  userName[i] =
                   info.display_name; // user names
                  //  userLogo[i] =
                   ("<img src=" + info.logo + ">") //user logo's
                  //  userStatus[i] =
                   info.status;
                  //  userURL[i] =
                   info.url;

                   $.ajax({
                       url: apiStream,
                       dataType: "jsonp",
                       success: function(data) {

                          //  userName[i] =
                           info.display_name;
                           userLogo = ("<img src=" + info.logo + ">")

                          //  userStatus[i] =
                           info.status;
                           userURL = info.url;

                           if (data.stream === null)
                               userOnline = "Offline";
                            else
                               userOnline = "Online";

                           $("#status").append(
                            //  userLogo[i] +
                              " " + "<a href =" + info.url+ " " + ">" + userLogo + "<br></br>"
                           + info.display_name + "</a>" + "<br></br>" + " " + " "+info.status + " "
                           +  "<br></br>" + " Currently"+ " "+userOnline + " " + "<br></br>"
                         + "_________________________________" + "<br></br>");
                       }
                   });
               }
           })
       };
   });
