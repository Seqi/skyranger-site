// Character pool bins all have an FF FF FF FF prefix
const xcomBinPrefix = Buffer.from([255, 255, 255, 255]);

function validate(buffer){
  var prefix = buffer.slice(0, 4);
  return xcomBinPrefix.equals(prefix);
}

module.exports = validate;
