function propertyBag(){

  this.getHeaderPropertyBag = function(names) {
    var props = require('../soldier-properties/header');

    // Create the properties to overwrite
    var headerPropertiesMap =  {
      "CharacterPool" : names.length
    }

    for(var xcomProp in headerPropertiesMap){
     setProperty(xcomProp, headerPropertiesMap[xcomProp], props);
    }
    return props;
  }

  this.getSoldierPropertyBag = function(name){
    var props = [].concat(
      require('../soldier-properties/about')(),
      require('../soldier-properties/appearence')()
    );

    // For each gender-specific property, set 'vals' to their (fe)male counterpart
    props.forEach(function populateGenderSpecificValues(prop){
      if (prop.isGenderSpecific === true){
        if(name.iGender === 0){
          prop.vals = prop.femaleVals;
        }
        else{
          prop.vals = prop.maleVals;
        }
      }
    });

    for(var xcomProp in name){
      setProperty(xcomProp, name[xcomProp], props);
    }

    // Put a timestamp on the creation
    setProperty("PoolTimestamp", require('./timestamp')(), props);

    return props;
  }

  function setProperty(key, value, props){
    props.forEach(function setPropertyIfMatching(prop){
      if (prop.name === key){
        // Dynamically set properties should only ever have one value.
        // However to preven strings being treated as arrays, we push
        // the values to an array to be selected
        prop.vals.push(value);
      }
    });
  }
}

module.exports = function(){
  return new propertyBag();
};
