const apikey = "777562c1b69cd09c121560b493704fc8";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbut = document.querySelector(".search button");
const weather = document.querySelector(".Weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey} `);
  var data = await response.json();
  console.log(data);

  document.querySelector(".imp").innerHTML = data.weather[0].main;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  if (data.weather[0].main == "Clouds") {
    weather.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weather.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weather.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weather.src = "images/drizzle.png";
  } else if (data.weather[0].main  == "Mist") {
    weather.src = "images/mist.png";
  }
  document.querySelector(".main").style.display="block";
}
searchbut.addEventListener("click", () => {
  checkweather(searchbox.value);
});

