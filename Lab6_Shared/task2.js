window.onload = function() {
  $("input1").observe("keypress", change);
  $("input2").observe("keypress", change);
  $("input3").observe("keypress", change);
  $("submitButton").observe("click", submitForm);
}
function change()
{
  var input = this.value;
  if (input.includes("Enter"))
  {
    this.value = "";
  }
}

function submitForm()
{
  var submit = true;
  if ($("input1").value == "")
  {
        submit = false;
  }
  if ($("input2").value == "")
  {
        submit = false;
  }
  if ($("input3").value == "")
  {
        submit = false;
  }
  if (submit != false)
  {
    $("myForm").submit();
  }
  else
  {
    $("ErrorMessage").innerHTML = "One of your fields has an error!";
    setInterval( function() {
      $("ErrorMessage").innerHTML = "&nbsp;";
    },
    2000);
  }
}
