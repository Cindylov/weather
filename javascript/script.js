const apiKey = "03f6d0b8745e298bc48e73a71e1c622b";

function getWeather() {
  const city = document.getElementById("city-input").value;
  const weatherInfo = document.getElementById("weather-info");

  if (city === "") {
    weatherInfo.innerHTML = "<p>Please enter a city name!</p>";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

function displayWeather(data) {
  const weatherInfo = document.getElementById("weather-info");
  const { name, main, weather, wind } = data;
  const weatherHtml = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp} °C</p>
    <p>Weather: ${weather[0].description}</p>
    <p>Humidity: ${main.humidity}%</p>
    <p>Wind Speed: ${wind.speed} m/s</p>
  `;
  weatherInfo.innerHTML = weatherHtml;
}
