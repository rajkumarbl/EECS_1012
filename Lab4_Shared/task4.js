/* Task1.js - Add your Java Script Code Here */
function rollDie()
{
  var num = Math.floor(Math.random() * 6);
  num = num + 1;
  return num;
}

function myFunction()
{
  var p = document.getElementById("mydata");
  var die1 = rollDie();
  var die2 = rollDie();
  p.innerHTML = "Dice rolls are \"" + die1 + "\"" + "  \"" + die2 + "\"";
  if (die1 == die2)
  {
    alert("DOUBLES!");
  }
}
