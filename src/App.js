// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';  // Import Sidebar
import SearchBar from './components/SearchBar'; // Import SearchBar
import Dashboard from './components/Dashboard'; // Import Dashboard component
import './styles/Dashboard.css';                // Import global styles

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Hamburger Icon to toggle sidebar */}
        <button className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </button>
        
        {/* Sidebar that opens/closes based on state */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="main-content">
          {/* Search Bar will be visible on all routes */}
          <SearchBar />

          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Dashboard page */}
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
