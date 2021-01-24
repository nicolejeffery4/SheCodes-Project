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

  let apiKey = "6446ee557ff31f6e26e69f3781c07d0f";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", citySearch);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureInput = document.querySelector("#temperature");
  temperatureInput.innerHTML = `${temperature}ºC`;
}
