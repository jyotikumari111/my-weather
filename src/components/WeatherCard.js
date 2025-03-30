import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData, loading, error }) => {
  const getBackgroundClass = () => {
    if (weatherData && weatherData.weather) {
      const condition = weatherData.weather[0].main.toLowerCase();
      if (condition === 'clear') return 'bg-blue-200';
      if (condition === 'clouds') return 'bg-gray-300';
      if (condition === 'rain') return 'bg-blue-400';
      if (condition === 'snow') return 'bg-white';
    }
    return 'bg-gray-100';
  };

  if (loading) {
    return <div className="text-center">Loading weather data...</div>;
  }


  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;

  }

  if (!weatherData) {
    return null;
  }

  const { name, main, weather, wind } = weatherData;

  return (
    <div className={`weather-card ${getBackgroundClass()}`}>

      <h2 className="text-xl font-bold">{name}</h2>
      <p>Temperature: {main.temp} °C</p>
      <p>Condition: {weather[0].description}</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Wind Speed: {wind.speed} km/h</p>
      <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather[0].description} />
    </div>
  );
};

export default WeatherCard;
