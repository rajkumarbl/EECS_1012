var highlighted = false;

window.onload = function()
{
  var tryButton = document.getElementById("button");
  tryButton.onclick = highlight;
}

function highlight()  {
  var div = document.getElementById("poem");
  var pars = div.getElementsByTagName("p");

  for (var i=0; i < pars.length; i++)
  {
    if (highlighted == false)
    {
      pars[i].style.backgroundColor = "yellow";
    }
    else
    {
      pars[i].style.backgroundColor = "silver";
    }
  }

  if (highlighted == false)
  {
    highlighted = true;
    document.getElementById("button").innerHTML = "Click to unhighlight"
  }
  else
  {
    highlighted = false;
    document.getElementById("button").innerHTML = "Click to highlight";
  }
}
