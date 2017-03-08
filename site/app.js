var app = require('express')();

var server = app.listen(8080, function onSuccessListen(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening on %s:%s", host, port);
})

app.get('/', function(req, res){
  res.writeHead(200, { "Content-Type": "text/html"});

  res.write("Here is my blank XCOM website thing which hasn't been written yet");
  res.end();
});

app.get('/read', function(req, res){

  var t = testSoldiers();
  res.setHeader("Content-disposition", "attachment; filename=Custom.bin");
  res.setHeader("Content-type", "application/octet-stream");
  res.writeHead(200, { "Content-Type": "text/html"});

  res.write(t);
  res.end();
});

function testSoldiers(){
  var soldierWriter = require('../api/src/soldier-writer');
  var reader = require('../api/src/soldier-reader');

  var testPerson = [];

  var firstNames = ["Oakley", "Charlie", "Casey", "Jessie", "Skyler"];
  var lastNames = ["Smith", "Adams", "Jackson", "Lowell", "Morgan"];

  var soldiersToCreate = process.argv[2] || 1;
  for(var i = 0; i < soldiersToCreate; i++){
    testPerson.push({
      strFirstName: firstNames[getRandomNumber(firstNames.length)],
      strNickName: "'" + i + "'",
      strLastName: lastNames[getRandomNumber(lastNames.length)],
      iGender: getRandomNumber(2) + 1,
      BackgroundText: "wew"
    });
  }

  return soldierWriter(testPerson);
}

function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}
