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
        <li><Link to="/app/profile" onClick={toggleSidebar}>Profile</Link></li>
        <li><Link to="/app/admin" onClick={toggleSidebar}>Admin Panel</Link></li>
        <li><Link to="/app/lecturers" onClick={toggleSidebar}>Lecturers</Link></li>
        <li><Link to="/app/students" onClick={toggleSidebar}>Students</Link></li>
        <li><Link to="/app/programs-courses" onClick={toggleSidebar}>Programs & Courses</Link></li>
        <li><Link to="/app/exams" onClick={toggleSidebar}>Complete Exams</Link></li>
        <li><Link to="/app/quiz-progress" onClick={toggleSidebar}>Quiz Progress Rec</Link></li>
        <li><Link to="/app/course-allocation" onClick={toggleSidebar}>Course Allocation</Link></li>
        <li><Link to="/app/manage-session" onClick={toggleSidebar}>Manage Session</Link></li>
        <li><Link to="/app/manage-semester" onClick={toggleSidebar}>Manage Semester</Link></li>
        <li className="others">→ Others</li>
        <li><Link to="/app/account" onClick={toggleSidebar}>Account Setting</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
