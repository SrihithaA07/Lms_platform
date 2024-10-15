// src/components/AuthenticatedApp.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import your Sidebar component
import Dashboard from './Dashboard'; // Import your Dashboard component
import SearchBar from './SearchBar'; // Import Search Bar component
import './AuthenticatedApp.css'; // Include your styles if any

const AuthenticatedApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar open/close

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Function to toggle sidebar
  };

  return (
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

        <div className="page-content">
          {/* Define routes for authenticated pages */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more routes here as necessary */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedApp;
