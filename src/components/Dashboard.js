// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Sample course data
  const courses = [
    { id: 1, name: 'Computer Science', code: 'CS101' },
    { id: 2, name: 'Civil Engineering', code: 'CE101' },
    { id: 3, name: 'Architecture', code: 'AR101' },
    { id: 4, name: 'Business Management', code: 'BM101' },
    { id: 5, name: 'Economics', code: 'EC101' },
    { id: 6, name: 'Mathematics', code: 'MA101' },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard</h2>

      {/* Courses Section */}
      <div className="courses-section">
        <h3>Available Courses</h3>
        <ul className="courses-list">
          {courses.map((course) => (
            <li key={course.id} className="course-item">
              <div className="course-info">
                <strong>{course.name}</strong> - <span>{course.code}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Other content can be added here */}
    </div>
  );
};

export default Dashboard;
