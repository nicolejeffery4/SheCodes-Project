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
if (currentMinutes <10) {
    currentMinutes =`0${currentMinutes}`;
}

let formattedTime = document.querySelector("#time");
formattedTime.innerHTML = `${currentHour}:${currentMinutes}`;

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
  temperatureInput.innerHTML = `${temperature}º`;

  celsiusTemperature = response.data.main.temp;

  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;

  let windspeed = document.querySelector("#wind");
  windspeed.innerHTML = Math.round(response.data.wind.speed);

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;

  let icon = document.querySelector("#icon");
  icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  )
}

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(fahrenheitTemperature)
}

function displayCelsiusTemperature(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemperature)