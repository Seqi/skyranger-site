const MAX_SOLDIERS = 100;

function parseNames(names){
  var soldiers = [];
  var lines = names.split("\n");

  if (lines > MAX_SOLDIERS){
      // TODO: Handle error here!
  }

  for(var i = 0; i < lines.length; i++){
    var soldier = parseName(lines[i]);
    if (soldier){
      // Give a random gender
      soldier.iGender = Math.floor(Math.random() * 2) + 1;

      // Give an empty Bio
      soldier.BackgroundText = "";

      soldiers.push(soldier);
    }
  }

  return soldiers;
}

function parseName(name){
  var segments = name.trim().split(' ');

  if (segments.length == 0){
    return null;
  }

  return {
    strFirstName: getFirstName(segments),
    strLastName: getLastName(segments),
    strNickName: getNickName(segments)
  };
}

function getFirstName(nameSegments){
  // We know that nameSegments will have at least one item in as it's
  // checked prior.
  // Max length: 11
  return nameSegments[0];
}

function getLastName(nameSegments){
  // Return blank string if only one name supplied
  // Max length: 15
  if (nameSegments.length < 2){
    return "";
  }

  return nameSegments[nameSegments.length - 1];
}

function getNickName(nameSegments){
  // Nickname would require first and last name already existing
  // Max Length: 11
  if (nameSegments.length < 3){
    return "";
  }

  var nick = nameSegments.slice(1, -1).join(' ');

  // Wrap in single quotes
  return "'" + nick + "'";
}

module.exports = parseNames;
