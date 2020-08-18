var font = 12;

/*
makeGreen();
makeBlue();
makeMono();
makeSanSerif();
makeSerif();
sizeLarger();
sizeSmaller();
*/

window.onload = function()
{
  /* one style */
  var b1 = document.getElementById("button1");
  b1.onclick = makeGreen; /* note - no () after the function name */
  /* another style */
  document.getElementById("button2").onclick = makeBlue;
  document.getElementById("button3").onclick = makeMono;
  document.getElementById("button4").onclick = makeSanSerif;
  document.getElementById("button5").onclick = makeSerif;
  document.getElementById("button6").onclick = sizeLarger;
  document.getElementById("button7").onclick = sizeSmaller;


}

function makeGreen() {
  var paragraph = document.getElementById("paragraph");
  paragraph.style.color = "green";
}

function makeBlue() {
  var paragraph = document.getElementById("paragraph");
  paragraph.style.color = "blue";
}

function makeMono() {
  var paragraph = document.getElementById("paragraph");
  paragraph.style.fontFamily = "monospace";
}

function makeSanSerif() {
  var paragraph = document.getElementById("paragraph");
  paragraph.style.fontFamily = "sans-serif";
}

function makeSerif() {
  var paragraph = document.getElementById("paragraph");
  paragraph.style.fontFamily = "serif";
}
function sizeLarger()
{
  var paragraph = document.getElementById("paragraph");
  font++;
  paragraph.style.fontSize = font;
}

function sizeSmaller()
{
  var paragraph = document.getElementById("paragraph");
  font--;
  paragraph.style.fontSize = font;
}
