/* Michael S. Brown, EECS1012 - York University (CC)
 FormsInput.js */
 window.onload = function() {
   $("userid").observe("keyup", enforceID);
   $("code").observe("keyup", enforceCode);
   $("number").observe("keyup", enforceNumbers);
   $("submitButton").observe("click", submitForm);
   $("clear").observe("click", clearSpans);
}

function enforceID()
{
  var reg = /^[A-Z][0-9A-Z]+$/i;
  if (reg.test($(this).value) == true) {
      $(this).nextElementSibling.innerHTML = "CORRECT";
    } else {
      $(this).nextElementSibling.innerHTML = "INCORRECT";
     }
}

function enforceCode()
{
  var codes=["EECS", "ESSE", "MATH", "HIST", "CHEM", "BIO"];
  var code = $("code").value;
  code = code.toUpperCase();
  if (codes.includes(code))
  {
    $(this).nextElementSibling.innerHTML = "CORRECT";
  }
  else {
    $(this).nextElementSibling.innerHTML = "INCORRECT";
  }
}

 function enforceNumbers()
 {
   var reg = /^[0-9][0-9][0-9][0-9]$/;

   if (reg.test($(this).value) == true) {
       $(this).nextElementSibling.innerHTML = "CORRECT";
     } else {
       $(this).nextElementSibling.innerHTML = "INCORRECT";
      }
 }


 function enforceNumberLettersSpace()
 {
   var reg = new RegExp(/^[a-zA-Z0-9\ ]+$/);

   if (reg.test($(this).value) == true) {
       $(this).removeClassName("unsuccessful");
       $(this).addClassName("successful");
       $(this).nextElementSibling.innerHTML = String.fromCharCode(10004);
     } else {
       $(this).addClassName("unsuccessful");
       $(this).removeClassName("successful");
       $(this).nextElementSibling.innerHTML = "&#10060;";
      }
 }

function submitForm()
{
  var spans = document.getElementsByClassName("message");
  var valid = true;

  for(var i=0; i < spans.length; i++)
  {
    if (spans[i].innerHTML != "CORRECT")
    {
      valid = false;
    }
  }
  if (valid)
  {
    document.getElementById("myForm").submit();
  }
  else {
    alert("Form is incorrect");
  }
}

function clearSpans()
{
  var spans = document.getElementsByClassName("message");
  for(var i=0; i < spans.length; i++)
  {
    spans[i].innerHTML = "";
  }
}
