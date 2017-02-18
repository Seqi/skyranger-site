// NB: To aid with the learning process of node/js, maybe seemingly obvious
// things are commented. Said things may be incorrect. If so, correct me!
var fs = require('fs');

// This is the public object that is passed back, exposing any functions
// the caller might need.
function xcomPoolParser(path){
  this.offset = 0;
  this.buffer = [];

  this.getSoldiers = function(){
    this.load(path);
    this.validateFile();

    while (!this.isEndOfFile()){
      this.getNextProperty();
    }
  }

  this.isEndOfFile = function(){
    return this.offset >= this.buffer.length;
  }

  this.getNextProperty = function(){
      this.skipBytes();
  }

  this.validateFile = function(){
    // Character pool bins all have an FF FF FF FF prefix
    // Skip over first 4 bytes, ensuring they match this value
    this.skipValue(Buffer.from([255, 255, 255, 255]).readUInt32LE());
  }

  this.readInt = function(){
    var length = this.buffer.readUInt32LE(this.offset);
    this.skipBytes();
    return length;
  }

  this.readString = function(){
    var length = this.readInt();

    var strBuffer = this.buffer.slice(this.offset, this.offset + length - 1);
    var val = strBuffer.toString("utf8");
    this.skipBytes(length);
    return val;
  }

  // Attempts to skip a 4 byte buffer, ensuring the value matches (default 0).
  this.skipValue = function(expectedVal = 0){
    var bufferVal = this.buffer.readUInt32LE(this.offset);
    if (bufferVal !== expectedVal){
      throw new Error("Value retrieved doesn't match expected value.")
    }
    this.skipBytes();
  }

  this.skipBytes = function(count){
    // If a value was not provided, shift by the standard 4 bytes
    this.offset += (count || 4);
  }

  this.load = function(path){
    if (this.validateFile)
    this.buffer = fs.readFileSync(path);
  }
}

module.exports = function(path){
  return new xcomPoolParser(path);
}
