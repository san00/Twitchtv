function streaming() {
    var users = ["freecodecamp", "OgamingSC2", "cretetion", " ESL_SC2", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "freecodecamp"];

    for (var i = 0; i < users.length; i++) {
        var apiResult = "https://wind-bow.gomix.me/twitch-api/users/" + users[i];
    }

    $.ajax({
        url: apiResult,
        type: "GET",
        dataType: "jsonp",
        success: function(info) {
            console.log(info);
            $("#streamers").text(info.name);
            // if (info.stream === null) return 'Offline';
            //   else return 'Online';
        }
    })
}
