import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import your Sidebar component
import SearchBar from './SearchBar'; // Import your SearchBar component
import Dashboard from './Dashboard'; // Import your Dashboard component

const LecturerAuthenticatedApp = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <SearchBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes specific to lecturer here */}
        </Routes>
      </div>
    </div>
  );
};

export default LecturerAuthenticatedApp;
