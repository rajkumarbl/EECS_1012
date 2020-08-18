/* Task3.js - Add your Java Script Code Here */
function addSum(num)
{
  var sum = 0;
  var p = document.getElementById("mydata");
  for(var i=0; i <= num; i++)
  {
    sum = sum + i;
  }
  p.innerHTML = "Result = " + sum;
}
