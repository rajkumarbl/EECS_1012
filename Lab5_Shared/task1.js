function light(num)
{
  var light = document.getElementById("light");
  var buttons = document.getElementsByTagName("button");
  var name = "light_" + num + ".jpg";
  for(var i=0; i <buttons.length; i++)
  {
    buttons[i].innerHTML = "OFF";
  }
  light.src = name;
  buttons[num-1].innerHTML = "ON";
}
