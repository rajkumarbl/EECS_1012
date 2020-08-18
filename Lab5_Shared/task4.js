var exampleCount=1;

/* Ths is an example of using the prototype library */
/* It is similar to JQuery */
window.onload = function()
{
  $("add").onclick = addText;
  $("delete").onclick = deleteText;
}

function addText()  {

  var outputDiv = document.getElementById("output");
  var inputText = document.getElementById("input");

  var newP = document.createElement("P");
  newP.innerHTML = inputText.value;
  outputDiv.appendChild(newP);
}

function deleteText() {
    var outputDiv = document.getElementById("output");
    var children = outputDiv.children;
    if (children.length > 0)
    {
      outputDiv.removeChild(children[0]);
    }
    else {
      alert("No paragraph to delete!");
    }
}
