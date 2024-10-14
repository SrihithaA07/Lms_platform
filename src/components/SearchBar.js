// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search All... #course, #program, #quiz, #news, #events"
      />
      <button className="search-button">
        <i className="fa fa-search"></i> {/* FontAwesome Icon */}
      </button>
    </div>
  );
};

export default SearchBar;
