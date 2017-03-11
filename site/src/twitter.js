var config = require('./config');

var twitterApi = require('node-twitter-api');

function twitter(app){
  const API_KEY = config.twitterKey;
  const API_SECRET = config.twitterSecret;

  const CALLBACK_URL = "http://192.168.0.6:8080/twitter/followers";

  var requestToken, requestSecret;

  // Generate the client
  var twitterClient = new twitterApi({
    consumerKey: API_KEY,
    consumerSecret: API_SECRET,
    callback: CALLBACK_URL
  });

  app.post('/twitter/auth', function(req, res){
    console.log("running");

    // Get the request token
    twitterClient.getRequestToken(
      function getRequestTokenResponse(err, token, secret, result){
        if (err){
          console.log("Error retrieving request token: %s", err);
          return res.end("Error");
        }

        // Store the tokens
        requestToken = token;
        requestSecret = secret;

        // Ask the user for permission
        res.redirect(twitterClient.getAuthUrl(token));
    });
  });

  // We have the oAuth token, get our access token
  app.get('/twitter/followers', function (req, res){
    var oAuthToken = req.query.oauth_token;
    var oAuthVerifier = req.query.oauth_verifier;

    twitterClient.getAccessToken(requestToken, requestSecret, oAuthVerifier,
      function getAccessTokenResponse(err, token, secret, result){
        if (err){
          console.log("Error retrieving access token");
          console.log(err);
          return res.end("Error");
        }

        var options = {
          count: 200
        }
       var followers = twitterClient.followers("list", options, token, secret,
          function getFollowersResponse(err, data, response){
            if (err){
              console.log("Error retrieving followers");
              console.log(err);
              return res.end("Error");
            }

            var followers = data.users;
            console.log(followers);
            followers.forEach(function (follower){
              res.write(follower.name + " \t\t\t\t @" + follower.screen_name);
              res.write("\n");
            });
           res.end();
      });
    });
  });
}
module.exports = twitter;
