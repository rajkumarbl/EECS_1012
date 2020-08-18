window.onload = function()
{
  createBoxes();
  $("myButton").observe("click", createBoxes)
}

function createBoxes()
{
  var colors = ["red", "green", "blue", "yellow", "silver", "orange"];
  /* create boxes */
  for(var i=0; i < 100; i++)
  {
    var newP = document.createElement("p");
    var top = Math.floor( Math.random() * 400 ) + "px";
    var left = Math.floor( Math.random() * 400 ) + "px";
    newP.style.top  = top;
    newP.style.left  = left;
    newP.style.backgroundColor = colors[ Math.floor( Math.random() *6 )];
    $(newP).observe("mousemove", deleteBox);
    $("container").appendChild(newP);
  }
}

function deleteBox()
{
  $("container").removeChild(this);
  if ($("container").children.length == 0)
  {
    alert("Last one!");
  }
}
