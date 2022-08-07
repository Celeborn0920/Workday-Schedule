//Variables to reference Dom Elements

var dateElement = document.getElementById("Date");
var buttonElement = document.getElementsByClassName("btn btn-primary btn-lg");

//Save data to local storage
function saveActivity() {
  var input = $(this)
    .siblings("input")
    .val()
    .trim();
  var inputKey = $(this)
    .siblings("input")
    .attr("data-name");

  if (input !== "") {
    window.localStorage.setItem(inputKey, input);
  }
}
for (var i = 0; i < buttonElement.length; i++) {
  buttonElement[i].onclick = saveActivity;
}
//Moment.js date on top of page
function LogIt(msg) {
  $("#Date").append(msg);
}

$(document).ready(function() {
  LogIt("It's&nbsp;" + moment().format("dddd, MMMM Do, h:mm:a"));

  //Input sections color change by hour
  function getExpireDate() {
    var currentHour = moment().hours();
    $("input").each(function() {
      var calendarHour = parseInt($(this).attr("id"));
      if (calendarHour === currentHour) {
        $(this).css("background", "red");
      } else if (calendarHour > currentHour) {
        $(this).css("background", "green");
      } else {
        $(this).css("background", "grey");
      }
    });
  }
  getExpireDate();
});

var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentTime);

function showTime() {
  document.getElementById("currentDay").innerHTML = currentTime
}
setInterval(showTime, 1000)
showTime();

document.getElementById("#9AM").textContent = localStorage.getItem("input");
document.getElementById("#10AM").textContent = localStorage.getItem("input");
document.getElementById("#11AM").textContent = localStorage.getItem("input");
document.getElementById("#12PM").textContent = localStorage.getItem("input");
document.getElementById("#1PM").textContent = localStorage.getItem("input");
document.getElementById("#2PM").textContent = localStorage.getItem("input");
document.getElementById("#3PM").textContent = localStorage.getItem("input");
document.getElementById("#4PM").textContent = localStorage.getItem("input");
document.getElementById("#5PM").textContent = localStorage.getItem("input");