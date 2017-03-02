function creator(){

  this.getHeader = function(soldiers) {
    var props = require('./properties/header');

    // Create the properties to overwrite
    var headerPropertiesMap =  {
      "CharacterPool" : soldiers.length
    }

    for(var xcomProp in headerPropertiesMap){
    	addPropertyOption(xcomProp, headerPropertiesMap[xcomProp], props);
    }

    // Pick out one property from the potential values for each property
    props.forEach(function chooseValue(prop){
      if (prop.name != "None"){
        var selectedVal = getRandomPropertyVal(prop);
        prop.val = selectedVal;
      }
    });

    return props;
  }

  this.getSoldier = function(soldier){
    var props = [].concat(
      require('./properties/about')(),
      require('./properties/appearence')()
    );

    // Populate vals with gender-specific values
    props.forEach(function(prop){
      setGenderPropertyOptions(prop, soldier);
    });

    setRaceSpecificVals(props);

    // Put a timestamp on the creation
    soldier.PoolTimestamp = require('./utility/timestamp')();

    // Set the user-defined properties (i.e. name)
    for(var xcomProp in soldier){
      addPropertyOption(xcomProp, soldier[xcomProp], props);
    }

    // Pick out one property from the potential values for each property
    props.forEach(setRandomPropertyVal);

        //console.log(props);
    return props;
  }

  // If the property has gender specific values, set available values to
  // the selected gender of the soldier
  function setGenderPropertyOptions(prop, soldier){
    if (prop.isGenderSpecific === true){
      prop.vals = soldier.iGender === 0 ? prop.femaleVals : prop.maleVals;
    }
  }

  function setRaceSpecificVals(props){
    // Get the race of the person and a matching head index
    var raceIndex = getRandomNumber(4);

    // Multiply by 6 to index through each set of possible heads for each race
    // (5 in total). Then random 5 to get which head of this race to use
    var headIndex = (raceIndex * 6) + getRandomNumber(5)

    // Manually find the properties and set the value
    props.forEach(function setRaceVals(prop){
      if (prop.name === "nmHead"){
        prop.val = prop.vals[headIndex];
      }
      else if (prop.name === "iRace"){
        prop.val = prop.vals[raceIndex];
      }
    });
  }

  // Adds a value to all available values of a property
  function addPropertyOption(key, value, props){
    props.forEach(function setPropertyIfMatching(prop){
      if (prop.name === key){
        prop.vals.push(value);
      }
    });
  }

  function setRandomPropertyVal(prop){
    // "None" properties have no value
    // Only set properties with available values where one hasn't been set
    if (prop.name != "None" && (!prop.val)){
      prop.val = getRandomPropertyVal(prop);
    }
  }

  // Returns a random value of a property
  function getRandomPropertyVal(prop){
    if(prop.vals){
      var index = getRandomNumber(prop.vals.length);
      return prop.vals[index];
    }
  }

  function getRandomNumber(max){
    return Math.floor(Math.random() * max);
  }
}

module.exports = function(){
  return new creator();
};
