let now = new Date();
{
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let hrs = now.getHours();
  if (hrs < 10) {
    hrs = `0${hours}`;
  }
  let mins = now.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }

  let dates = document.querySelector(".date");
  dates.innerHTML = `${day}  ${date} ${month} | ${hrs}:${mins}`;
}
function searchCity() {
  let input = document.querySelector("#searcher");
  let h2 = document.querySelector("h2");
  if (input.value) {
    h2.innerHTML = input.value;
  } else {
    h2.innerHTML = null;
    alert(`Please Enter City`);
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temp");
  temperatureElement.innerHTML = 82.4;
}
let fah_link = document.querySelector("#F_link");
fah_link.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temp");
  temperatureElement.innerHTML = 28;
}

let cel_link = document.querySelector("#C_link");
cel_link.addEventListener("click", convertToCelsius);
