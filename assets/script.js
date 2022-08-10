//Variables to reference Dom Elements

var dateElement = document.getElementById("Date");
var buttonElement = document.getElementsByClassName("btn btn-primary btn-lg");
var input9AM = document.getElementById("text9AM");
var input10AM = document.getElementById("text10AM");
var input11AM = document.getElementById("text11AM");
var input12PM = document.getElementById("text12PM");
var input1PM = document.getElementById("text1PM");
var input2PM = document.getElementById("text2PM");
var input3PM = document.getElementById("text3PM");
var input4PM = document.getElementById("text4PM");
var input5PM = document.getElementById("text5PM");



function showTime() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  document.getElementById("currentDay").innerHTML = currentTime
}
setInterval(showTime, 1000)
showTime();

document.getElementById("9amBtn").addEventListener("click", function(){
  localStorage.setItem("saved-input-9am", JSON.stringify(input9AM.value));
})

document.getElementById("10amBtn").addEventListener("click", function(){
  localStorage.setItem("saved-input-10am", JSON.stringify(input10AM.value));
})

document.getElementById("11amBtn").addEventListener("click", function(){
  localStorage.setItem("saved-input-11am", JSON.stringify(input11AM.value));
})

document.getElementById("12pmBtn").addEventListener("click", function(){
  localStorage.setItem("saved-input-12pm", JSON.stringify(input12PM.value));
})

document.getElementById("1pmBtn").addEventListener("click", function(){
  localStorage.setItem("saved-input-1pm", JSON.stringify(input12PM.value));
})

document.getElementById("2pmBtn").addEventListener("click", function(){
  localStorage.setItem("saved-input-2pm", JSON.stringify(input2PM.value));
})

document.getElementById("3pmBtn").addEventListener("click", function(){
  localStorage.setItem("saved-input-3pm", JSON.stringify(input3PM.value));
})

document.getElementById("4pmBtn").addEventListener("click", function(){
  localStorage.setItem("saved-input-4pm", JSON.stringify(input4PM.value));
})

document.getElementById("5pmBtn").addEventListener("click", function(){
  localStorage.setItem("saved-input-5pm", JSON.stringify(input5PM.value));
})

function getData() {
  input9AM.value = JSON.parse(localStorage.getItem("saved-input-9am"))
  input10AM.value = JSON.parse(localStorage.getItem("saved-input-10am"))
  input11AM.value = JSON.parse(localStorage.getItem("saved-input-11am"))
  input12PM.value = JSON.parse(localStorage.getItem("saved-input-12pm"))
  input1PM.value = JSON.parse(localStorage.getItem("saved-input-1pm"))
  input2PM.value = JSON.parse(localStorage.getItem("saved-input-2pm"))
  input3PM.value = JSON.parse(localStorage.getItem("saved-input-3pm"))
  input4PM.value = JSON.parse(localStorage.getItem("saved-input-4pm"))
  input5PM.value = JSON.parse(localStorage.getItem("saved-input-5pm"))
}

getData()

if (moment().hour() === 9) {
  $('#td9AM').css("background-color","red")
}
if (moment().hour() > 9) {
  $('#td9AM').css("background-color","gray", "overflow", "hidden")
}if (moment().hour() < 9) {
  $('#td9AM').css("background-color","green")
}
if (moment().hour() === 10) {
  $('#td10AM').css("background-color","red")
}
if (moment().hour() > 10) {
  $('#td10AM').css("background-color","gray")
}
if (moment().hour() < 10) {
  $('#td10AM').css("background-color","green")
}
if (moment().hour() === 11) {
  $('#td11AM').css("background-color","red")
}
if (moment().hour() > 11) {
  $('#td11AM').css("background-color","gray")
}
if (moment().hour() < 11) {
  $('#td11AM').css("background-color","green")
}
if (moment().hour() === 12) {
  $('#td12PM').css("background-color","red")
}
if (moment().hour() > 12) {
  $('#td12PM').css("background-color","gray")
}
if (moment().hour() < 12) {
  $('#td12PM').css("background-color","green")
}
if (moment().hour() === 13) {
  $('#td1PM').css("background-color","red")
}
if (moment().hour() > 13) {
  $('#td1PM').css("background-color","gray")
}
if (moment().hour() < 13) {
  $('#td1PM').css("background-color","green")
}
if (moment().hour() === 14) {
  $('#td2PM').css("background-color","red")
}
if (moment().hour() > 14) {
  $('#td2PM').css("background-color","gray")
}
if (moment().hour() < 14) {
  $('#td2PM').css("background-color","green")
}
if (moment().hour() === 15) {
  $('#td3PM').css("background-color","red")
}
if (moment().hour() > 15) {
  $('#td3PM').css("background-color","gray")
}
if (moment().hour() < 15) {
  $('#td3PM').css("background-color","green")
}
if (moment().hour() === 16) {
  $('#td4PM').css("background-color","red")
}
if (moment().hour() > 16) {
  $('#td4PM').css("background-color","gray")
}
if (moment().hour() < 16) {
  $('#td4PM').css("background-color","green")
}
if (moment().hour() === 17) {
  $('#td5PM').css("background-color","red")
}
if (moment().hour() > 17) {
  $('#td5PM').css("background-color","gray")
}
if (moment().hour() < 17) {
  $('#td5PM').css("background-color","green")
}
