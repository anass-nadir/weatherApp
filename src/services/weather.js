const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=',
  forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=',
  appID = process.env.VUE_APP_WEATHER_APP_ID;

export const getWeather = async city => {
  const res = await fetch(
    `${weatherURL}${city}&units=metric&appid=${appID}`
  );
  return await res.json();
};

export const getForecast = async city => {
  const res = await fetch(
    `${forecastURL}${city}&units=metric&appid=${appID}`
  );
  return await res.json();
};
