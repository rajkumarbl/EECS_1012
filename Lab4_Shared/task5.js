/* Task5.js - Add your Java Script Code Here */
function myFunction()
{
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var d = new Date();
  var dayOfWeek = d.getDay();
  var month = d.getMonth();
  var day = d.getDate();
  var year = d.getFullYear();
  var p = document.getElementById("mydata");

  p.innerHTML = "Today is the " + day + " (" + days[dayOfWeek] + ") " + months[month] + " " + year;
}
