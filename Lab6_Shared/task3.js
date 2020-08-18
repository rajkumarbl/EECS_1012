window.onload = function()
{
  populateDays();
  populateMonth();
  populateYear();
}

function populateDays()
{
  var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  for(var i=0; i < Days.length; i++)
  {
    var option = document.createElement("option");
    option.innerHTML = Days[i];
    $("days").appendChild(option);
  }
}

function populateMonth()
{
  var Months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for(var i=0; i < Months.length; i++)
  {
    var option = document.createElement("option");
    option.innerHTML = Months[i];
    $("months").appendChild(option);
  }
}

function populateYear()
{
  for(var i=1970; i < 2019; i++)
  {
    var option = document.createElement("option");
    option.innerHTML = ""+i;
    $("years").appendChild(option);
  }
}
