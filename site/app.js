var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var server = app.listen(8080, function onSuccessListen(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening on %s:%s", host, port);
})

// Parses if data is sent as JSON
app.use(bodyParser.json());

// Parses if data is sent as a query string
app.use(bodyParser.urlencoded({
  extended: true
}));

// Loads in public resources
app.use(express.static(__dirname + "/public/styles"));
app.use(express.static(__dirname + "/public/scripts"));


app.get('/', function(req, res){
  writePageToOutput(res);
});

app.post('/', function(req, res){
  // Split the names up
  if (!req.body){
    return;
  }

  var soldiers = [];
  var lines = req.body.inputText.split("\n");

  for(var i = 0; i < lines.length; i++){
    var parsedName = parseName(lines[i]);
    if (!parsedName){
      return console.log("Bad name: " + lines[i]);
    }
    soldiers.push(parsedName);
  }

  console.log(soldiers);

  writePageToOutput(res);
});

function parseName(name){
  var segments = name.trim().split(' ');
  var name = {};

  if (segments.length == 1){
    return { firstName: segments[0] };
  }
  else if (segments.length == 2){
    return { firstName: segments[0], lastName: segments[1] };
  }
  else if (segments.length == 3){
    return { firstName: segments[0], nickName: segments[1], lastName: segments[2] };
  }
  else return null;
}

function writePageToOutput(response){
  var options = {
    root: __dirname + '/public/views'
  }

  response.sendFile("index.html", options, function(err){
    if (err){
      console.log(err);
    }
  });
}
