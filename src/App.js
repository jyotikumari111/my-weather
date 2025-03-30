import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`);
      if (response.status !== 200) {
        throw new Error('City not found');
      }
      const data = response.data;
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`App ${getBackgroundClass()}`}>
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={fetchWeather} />
      </header>
      <WeatherCard weatherData={weatherData} loading={loading} error={error} />
    </div>
  );
}

export default App;
