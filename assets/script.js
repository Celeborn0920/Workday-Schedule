//Variables to reference Dom Elements

var dateElement = document.getElementById("Date");
var buttonElement = document.getElementsByClassName("btn btn-primary btn-lg");

function showTime() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  document.getElementById("currentDay").innerHTML = currentTime
}
setInterval(showTime, 1000)
showTime();


document.getElementById("9amBtn").addEventListener("click", function(){
  var textInput = document.getElementById("text9AM");
  localStorage.setItem("saved-input", JSON.stringify(textInput.value));
  console.log('Testing: You pressed save')
})

document.getElementById("10amBtn").addEventListener("click", function(){
  var textInput = document.getElementById("text10AM");
  localStorage.setItem("saved-input", JSON.stringify(textInput.value));
  console.log('Testing: You pressed save')
})

document.getElementById("11amBtn").addEventListener("click", function(){
  var textInput = document.getElementById("text11AM");
  localStorage.setItem("saved-input", JSON.stringify(textInput.value));
  console.log('Testing: You pressed save')
})

document.getElementById("12pmBtn").addEventListener("click", function(){
  var textInput = document.getElementById("text12PM");
  localStorage.setItem("saved-input", JSON.stringify(textInput.value));
  console.log('Testing: You pressed save')
})

document.getElementById("1pmBtn").addEventListener("click", function(){
  var textInput = document.getElementById("text1PM");
  localStorage.setItem("saved-input", JSON.stringify(textInput.value));
  console.log('Testing: You pressed save')
})

document.getElementById("2pmBtn").addEventListener("click", function(){
  var textInput = document.getElementById("text2PM");
  localStorage.setItem("saved-input", JSON.stringify(textInput.value));
  console.log('Testing: You pressed save')
})

document.getElementById("3pmBtn").addEventListener("click", function(){
  var textInput = document.getElementById("text3PM");
  localStorage.setItem("saved-input", JSON.stringify(textInput.value));
  console.log('Testing: You pressed save')
})

document.getElementById("4pmBtn").addEventListener("click", function(){
  var textInput = document.getElementById("text4PM");
  localStorage.setItem("saved-input", JSON.stringify(textInput.value));
  console.log('Testing: You pressed save')
})

document.getElementById("5pmBtn").addEventListener("click", function(){
  var textInput = document.getElementById("text5PM");
  localStorage.setItem("saved-input", JSON.stringify(textInput.value));
  console.log('Testing: You pressed save')
})

