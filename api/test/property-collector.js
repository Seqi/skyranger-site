// var fs = require('fs');
// var reader = require('../src/soldier-reader.js');
// var writer = require('../src/soldier-writer.js');
//
// var files = [
//   "./src/bin/Developers.bin",
//   "./src/bin/Dump.bin"
// ];
//
// // Collect all soldiers in a flat array
// var soldiers = [];
// for (var i = 0; i < files.length; i++){
//   var fileBuffer = fs.readFileSync(files[i]);
//   var readResult = reader(fileBuffer).getSoldiers();
//   soldiers = soldiers.concat(readResult.soldiers);
// }
//
// console.log("Got " + soldiers.length + " soldiers.");
//
// var properties = [];
// var propertiesToIgnore = ["strFirstName", "strLastName", "strNickName", "BackgroundText", "PoolTimestamp"];
//
// // Loop through our sample of soldiers to record all values for each property
// soldiers.forEach(function extractSoldierProperties(soldier){
//   for (var prop in soldier){
//     // Ignore specific properties that are unique or we don't care to record
//     if (prop.type == "BoolProperty" ||
//         propertiesToIgnore.indexOf(prop) >= 0){
//       continue;
//     }
//
//     if (!properties[prop]){
//       properties[prop] = [soldier[prop].val];
//     }
//     // Check the value doesn't exist
//     else if (properties[prop].indexOf(soldier[prop].val) < 0){
//       properties[prop].push(soldier[prop].val);
//     }
//   }
// });
//
// console.log(properties);
