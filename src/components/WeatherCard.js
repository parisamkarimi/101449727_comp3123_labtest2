import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return <p>Search for a city to view its weather.</p>;
  }

  const { name, main, weather: weatherDetails } = weather;
  const { temp, humidity } = main;
  const { description, icon } = weatherDetails[0];

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>Temperature: {temp}°C</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default WeatherCard;
