import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-lg"
    >
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name..."
        className="w-64 p-5 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
      />
      <button
        type="submit"
        className="px-5 py-5 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
      >
        🔍 Search
      </button>
    </form>
  );
};

export default SearchBar;
