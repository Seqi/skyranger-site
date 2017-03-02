function creator(){

  this.getHeader = function(names) {
    var props = require('./properties/header');

    // Create the properties to overwrite
    var headerPropertiesMap =  {
      "CharacterPool" : names.length
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

  this.getSoldier = function(name){
    var props = [].concat(
      require('./properties/about')(),
      require('./properties/appearence')()
    );

    // For each gender-specific property, pick a random prop from the correct array
    props.forEach(function populateGenderSpecificValues(prop){
      if (prop.isGenderSpecific === true){
        prop.vals = name.iGender === 0 ? prop.femaleVals : prop.maleVals;
      }
    });

    // Put a timestamp on the creation
    name.PoolTimestamp = require('./utility/timestamp')();

    // Set the user-defined properties (i.e. name)
    for(var xcomProp in name){
      addPropertyOption(xcomProp, name[xcomProp], props);
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

  function addPropertyOption(key, value, props){
    props.forEach(function setPropertyIfMatching(prop){
      if (prop.name === key){ 
        prop.vals.push(value);
      }
    });
  }

  function getRandomPropertyVal(prop){
    // Only set properties with available values where one hasn't been set
    if(!prop.val && prop.vals){
      var index = Math.floor(Math.random() * prop.vals.length);
      return prop.vals[index];
    }
  }
}

module.exports = function(){
  return new creator();
};
