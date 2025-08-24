const apiKey = '64b8f3ca73219ed49870c40b0620e36b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');

const cityEl = document.querySelector('.city');
const tempEl = document.querySelector('.temp');
const conditionEl = document.querySelector('.condition');
const humidityEl = document.querySelector('.humidity');
const windEl = document.querySelector('.wind');
const weatherIcon = document.querySelector('.weather_icon');
const weatherBox = document.querySelector('.weather');

async function getWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    // Update UI
    cityEl.textContent = data.name;
    tempEl.textContent = `${Math.round(data.main.temp)}°C`;
    conditionEl.textContent = data.weather[0].main;
    humidityEl.textContent = `${data.main.humidity}% Humidity`;
    windEl.textContent = `${data.wind.speed} km/h Wind`;

    // Weather icon
    const weather = data.weather[0].main.toLowerCase();
    if (weather.includes("cloud")) {
      weatherIcon.src = "/images/clouds.png";
    } else if (weather.includes("rain")) {
      weatherIcon.src = "/images/rain.png";
    } else if (weather.includes("clear")) {
      weatherIcon.src = "/images/clear.png";
    } else if (weather.includes("snow")) {
      weatherIcon.src = "/images/snow.png";
    } else {
      weatherIcon.src = "/images/clouds.png";
    }

    // Show weather box
    weatherBox.style.display = "block";

  } catch (err) {
    alert(err.message);
    weatherBox.style.display = "none"; // hide if not found
  }
}

// Button click
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name");
  }
});

// Press Enter key
cityInput.addEventListener('keyup', (event) => {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
