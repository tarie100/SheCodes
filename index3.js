let displayTime = document.querySelector("h2");
let currentDate = new Date();
let day = currentDate.getDay();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let getDay = days[day];
displayTime.innerHTML = `${getDay} ${hours}:${minutes}`;

function city(event) {
  event.preventDefault();
  let city = document.querySelector("#searcher").value;

  let apiKey = "8a7f0470be494979751f55f08b923e21";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(retrieveTemp);
}

function retrieveTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = `${Math.round(
    response.data.main.temp
  )}ºC`;
}
let displayCity = document.querySelector("#weatherform");
displayCity.addEventListener("submit", city);

function searchLocation(position) {
  let apiKey = "8a7f0470be494979751f55f08b923e21";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}
&lon=${position.coords.longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(retrieveTemp);
}
function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentSearchButton = document.querySelector("#currentButton");
currentSearchButton.addEventListener("click", currentLocation);
