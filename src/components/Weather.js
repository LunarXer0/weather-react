import React, { Component } from "react";

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  error
}) => (
  <div className="weather__info">
    {city &&
      country && (
        <p className="weather__key">
          Location: {city}, {country}
        </p>
      )}
    {temperature && <p className="weather__key">Temperature: {temperature}</p>}
    {humidity && <p className="weather__key">Humidity: {humidity}</p>}
    {description && <p className="weather__key">Conditions: {description}</p>}
    {error && <p className="weather__key">{error}</p>}
  </div>
);

export default Weather;
