function parseNames(names){
  var soldiers = [];
  var lines = names.split("\n");

  for(var i = 0; i < lines.length; i++){
    var soldier = parseName(lines[i]);
    if (soldier){
      // Give a random gender
      soldier.iGender = Math.floor(Math.random() * 2);

      // Give an empty Bio
      soldier.BackgroundText = "";

      soldiers.push(soldier);
    }
  }

  return soldiers;
}

function parseName(name){
  var segments = name.trim().split(' ');
  var name = {};

  // Currently we have to ensure all properties are populated
  // TODO: This is pretty lazy, do this properly
  if (segments.length == 1){
    return { strFirstName: segments[0], strNickName: "", strLastName: ""};
  }
  else if (segments.length == 2){
    return { strFirstName: segments[0], strNickName: "", strLastName: segments[1] };
  }
  // Trim any extra names
  else if (segments.length > 2){
    return { strFirstName: segments[0], strNickName: segments[1], strLastName: segments[2] };
  }
  else return null;
}

module.exports = parseNames;
