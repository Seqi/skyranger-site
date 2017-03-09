var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

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
app.use(express.static(__dirname + "/public/images"));
app.use(express.static(__dirname + "/public/scripts"));


app.get('/', function(req, res){
  writePageToOutput(res);
});

app.post('/', function(req, res){
  // If we retrieved nothing to work with, send user back
  if (!req.body || !req.body.inputText){
    return writePageToOutput(res);
  }

  // Create a .bin file from the input
  var soldierJson = require('./src/text-parser')(req.body.inputText);
  var soldierWriter = require('../api/src/soldier-writer');
  var file = soldierWriter(soldierJson);

  // Download the file
  res.writeHead(200, {
    "Content-Type": "application/octet-stream",
    "Content-disposition": "attachment;filename=Custom.bin",
    "Content-Length": file.length
  });
  res.end(file);
});


function writePageToOutput(response){
  var options = {
    root: __dirname + '/public/views'
  }

  response.sendFile("index.html", options, function onSendFileError(err){
    if (err){
      console.log(err);
      response.end("Error occurred. Try again later.");
    }
  });
}
