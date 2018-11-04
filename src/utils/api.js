const API_KEY = "47eb9578a466ef7da8c88b2fa72a68f0";

export async function getWeatherByCityAndCC(city, country) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}US&APPID=${API_KEY}`
  );
  const weather = await res.json();
  //console.log(weather);
  return weather;
}

export async function getForecastForFiveDays(city, countryCode) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&APPID=${API_KEY}`
  );
  const forecast = await res.json();
  console.log(forecast);
}
