// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      <ul className="sidebar-list">
        <li><Link to="/dashboard" onClick={toggleSidebar}>Dashboard</Link></li>
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/profile" onClick={toggleSidebar}>Profile</Link></li>
        <li>Admin Panel</li>
        <li>Lecturers</li>
        <li>Students</li>
        <li>Programs & Courses</li>
        <li>Complete Exams</li>
        <li>Quiz Progress Rec</li>
        <li>Course Allocation</li>
        <li>Manage Session</li>
        <li>Manage Semester</li>
        <li className="others">→ Others</li>
        <li>Account Setting</li>
      </ul>
    </div>
  );
};

export default Sidebar;
