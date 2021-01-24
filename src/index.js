
let currentTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let currentDay = days[currentTime.getDay()];
let currentHour = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();

let formattedTime = document.querySelector("#time");
formattedTime.innerHTML = `${currentHour}${currentMinutes}`;

let formattedDay = document.querySelector("#day");
formattedDay.innerHTML = `${currentDay}`;

function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  
  let city = document.querySelector("#city");
  city.innerHTML = `${cityInput.value}`;
}


let form = document.querySelector("form");
form.addEventListener("submit", citySearch);