const API_KEY = "47eb9578a466ef7da8c88b2fa72a68f0";

export async function getWeatherByCityAndCC(city, cc) {
  const res = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}`);
  const weather = await res.json();
  console.log(weather);
}
