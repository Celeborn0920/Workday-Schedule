//Variables to reference Dom Elements

var dateElement = document.getElementById("Date");
var buttonElement = document.getElementsByClassName("btn btn-primary btn-lg");

function showTime() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  document.getElementById("currentDay").innerHTML = currentTime
}
setInterval(showTime, 1000)
showTime();

document.querySelector(".saveBtn").addEventListener("click", function(){
  var textInput = document.querySelector("#input");
  localStorage.setItem("saved-input", JSON.stringify(textInput));
  console.log('You pressed save')
})

