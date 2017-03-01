function generateTimestamp(){
  var months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  var days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  var date = new Date();

  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  var hour = date.getHours() % 13 + (date.getHours() > 12 ? 1 : 0);
  var minute = date.getMinutes();

  var period = date.getYear() >= 12 ? "PM": "AM";

  var stamp = month + " " +
    zeroPadDate(day) + ", " +
    year + " - " +
    zeroPadDate(hour) + ":" +
    zeroPadDate(minute) + " " +
    period;

  return stamp;
};

function zeroPadDate(num){
  if (num < 10){
    return "0" + num;
  }
  else return num;
}

module.exports = generateTimestamp;
