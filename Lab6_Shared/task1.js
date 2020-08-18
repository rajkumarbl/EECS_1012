var index = 0;
var faces = ["face1.png", "face2.png", "face3.png", "face4.png"];

function getRandom()
{
  return Math.floor(Math.random() * 4);
}
window.onload = function() {
  $("myImg").observe("mouseover", change);
  index = getRandom();
  $("myImg").src = faces[index];
}

function change()
{

  var newIndex = getRandom();
  while (index == newIndex)
  {
    newIndex = getRandom();
  }
  index = newIndex;
  $("myImg").src = faces[index];

}
