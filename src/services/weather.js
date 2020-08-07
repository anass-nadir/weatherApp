const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=',
  forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=',
  appID = process.env.VUE_APP_WEATHER_APP_ID;

export const getWeather = city => {
  return fetch(
    `${weatherURL}${city}&units=metric&appid=${appID}`
  ).then((res) => res.json());
};

export const getForecast = city => {
  return fetch(
    `${forecastURL}${city}&units=metric&appid=${appID}`
  ).then((res) => res.json());
};
