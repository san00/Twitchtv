   $(document).ready(function() {
       var twitchUsers = ["ESL_SC2", "freecodecamp", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

       var userName = [];
       var userLogo = [];
       var channelDesc = [];
       var userURL = [];
       var userOnline;

       for (var i = 0; i < twitchUsers.length; i++) {
           var apiResult = "https://wind-bow.gomix.me/twitch-api/channels/" + twitchUsers[i];

           streaming(i);
       };

       function streaming() {

           var apiStream = "https://wind-bow.gomix.me/twitch-api/streams/" + twitchUsers[i];

           $.ajax({
               url: apiResult,
               dataType: "jsonp",
               success: function(channel) {

                   userName[i] = channel.display_name;
                   userLogo[i] = ("<img src=" + channel.logo + ">")
                   channelDesc[i] = channel.status;
                   userURL[i] = channel.url;

                   $.ajax({
                       url: apiStream,
                       dataType: "jsonp",
                       success: function(userStream) {

                           userName[i] = channel.display_name;
                           userLogo = ("<img src=" + channel.logo + ">")
                           channelDesc[i] = channel.status;
                           userURL[i] = channel.url;

                           if (userStream.stream === null)
                               userOnline = "Offline";
                           else
                               userOnline = "Online";

                           $("#status").append(
                              
                               "<br></br>" + "<a href =" + userURL[i] + " " + ">" + userLogo + "<br></br>" +
                               userName[i] + "</a>" + "<br></br>" + " " + " " + channelDesc[i] + " " +
                               "<br></br>" + " Currently" + " " + userOnline + " " + "<br></br>" +
                               "_________________________________" + "<br></br>");
                       }
                   });
               }
           })
       };
   });
