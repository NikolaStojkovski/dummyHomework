const API_URL =
  "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b";
const mainEl = document.querySelector(".main-panel");
const weatherContainer = document.querySelector(".container");
const hourlyBtn = document.querySelector(".hourly-btn");
const newDayDiv = document.querySelector(".newDay");
const dailyContainer = document.querySelector(".daily-container");
const rightPart = document.querySelector(".right-part");
const homeButton = document.querySelector(".home-btn");
const aboutUsButton = document.querySelector(".about-us-btn");
const searchBtn = document.querySelector(".search-button");
const searchBox = document.querySelector(".search-box");
const SEARCH_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=Kumanovo&limit=1&appid=83cf676a48739fd57b023a3d32f2ef8b`;
let searchName;
searchBtn.addEventListener("click", () => {
  fetchGeoAPIData(searchBox.value);
  searchName = searchBox.value;
  searchBox.value = "";
});
const fetchGeoAPIData = async (city) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=83cf676a48739fd57b023a3d32f2ef8b`
    );
    const data = await res.json();
    fetchWeatherData(data[0].lon, data[0].lat);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
const fetchWeatherData = async (lon, lat) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b`
    );
    const data = await res.json();
    data.daily.shift();
    hourlyBtnFunc(data);
    displayData(data);
    homeBtnFunc(data);
    displayDailyData(data.daily);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const displayData = (dummyData) => {
  const date = new Date(dummyData.current.dt * 1000);
  mainEl.innerHTML = `<div class="weather-container">
  <div class="first-part">
        <div class="container">
          <div class="left-part">
            <h1 class="city-name">${searchName}</h1>

            <span class="date">${date.toLocaleDateString("fr")}</span>
            <h2 class="temp">
              <img src=http://openweathermap.org/img/wn/${
                dummyData.current.weather[0].icon
              }@2x.png> ${dummyData.current.temp}°C
            </h2>
            <p>Feels Like</p>
            <h2 class="feels-like">${dummyData.current.feels_like}°C</h2>
          </div>
          <div class="right-part">
            <h2 class="humidity">Humidity: ${dummyData.current.humidity}%</h2>
            <div class="line"></div>
            <h2 class="wind-speed">Wind Speed: ${
              dummyData.current.wind_speed
            }km/h</h2>
            <div class="line"></div>
            <h2 class="description">${
              dummyData.current.weather[0].description
            }</h2>
          </div>
        </div>
        </div>
        <div class="daily-container"></div>
      </div>`;
  const dailyContainer = document.querySelector(".daily-container");
  dailyContainer.innerHTML = displayDailyData(dummyData.daily);
};

const displayDailyData = (dailyWeatherData) => {
  return dailyWeatherData
    .map((day) => {
      const newDate = new Date(day.dt * 1000);
      return `
    <div class="daily">
    <div>
    <h4>${newDate.toLocaleDateString("fr")}</h4>
    </div>
    <div class="daily-img">
         <img src=http://openweathermap.org/img/wn/${day.weather[0].icon}.png>
         </div>
         <div class="min-max">
         <h4>Max: ${Math.round(day.temp.max)}°C</h4>
         <p>Min: ${Math.round(day.temp.min)}°C</p>
         </div>
         </div>
         `;
    })
    .join("");
};
const displayHourlyData = (hourlyWeatherData) => {
  return hourlyWeatherData
    .slice(0, 25)
    .map((day) => {
      const newDate = new Date(day.dt * 1000);
      return `
   <div class="hourly">
  <p class="hour">${newDate.getHours()}h</p>
  <img src=http://openweathermap.org/img/wn/${day.weather[0].icon}.png>
  <p class="description">${day.weather[0].description}</p>
  <h4 class="temp">${Math.round(day.temp)}</h4>
  <h5 class="feels-like">${Math.round(day.feels_like)}</h5>
  <p class="humidity">${day.humidity}%</p>
</div>
<div class="hourly-line"></div>
    `;
    })
    .join("");
};
const homeBtnFunc = (wearherData) => {
  homeButton.addEventListener("click", () => {
    mainEl.innerHTML = "";
    displayData(wearherData);
  });
};

const hourlyBtnFunc = (hourlyWeatherData) => {
  hourlyBtn.addEventListener("click", () => {
    const date = new Date(hourlyWeatherData.current.dt * 1000);
    mainEl.innerHTML = `<div class="weather-container">
  <div class="first-part">
        <div class="hourly-btn-container">
          <div class="current-weather">
          <div>
            <h1 class="city-name">Skopje</h1>
            <span class="date">${date.toLocaleDateString("fr")}</span>
            </div>
            <div>
            <h2 class="temp">
              <img src=http://openweathermap.org/img/wn/${
                hourlyWeatherData.current.weather[0].icon
              }@2x.png> ${hourlyWeatherData.current.temp}°C
            </h2>
           
            </div>
          </div>
        </div>
        </div>
        <div class="secound-part">
        <div class="hourly-container">
        </div>
        </div>
      </div>`;

    document.querySelector(".hourly-container").innerHTML = `
  <div class="tags">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path></svg>
        <p>WEATHER TYPE</p>
        <p>WEATHER DESCRIPTION</p>
        <p>TEMP.</p>
        <p>FEELS LIKE</p>
        <p>HUMIDITY</p>
        </div> +
        ${displayHourlyData(hourlyWeatherData.hourly)}`;

    document.querySelector(".first-part").style.justifyContent = "left";
  });
};

aboutUsButton.addEventListener("click", () => {
  mainEl.innerHTML = "";
});
