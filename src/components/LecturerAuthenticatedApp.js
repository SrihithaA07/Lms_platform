import React from 'react';
import { Link } from 'react-router-dom';
import './LecturerAuthenticatedApp.css'; // Import the CSS for styling

const LecturerAuthenticatedApp = () => {
  const features = [
    { name: 'Course Management', path: '/CourseManagementCard' },
    { name: 'Assignment Management', path: '/assignment-management' },
    { name: 'Quiz Management', path: '/quiz-management' },
    { name: 'Grading & Feedback', path: '/grading-feedback' },
    { name: 'Student Management', path: '/student-management' },
    { name: 'Communication', path: '/communication' },
  ];

  return (
    <div className="dashboard">
      <h1>Teacher Dashboard</h1>
      <div className="cards-container">
        {features.map((feature, index) => (
          <Link to={feature.path} key={index} className="card">
            <div className="card-content">
              <h3>{feature.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LecturerAuthenticatedApp;