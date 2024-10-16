import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import StudentAuthenticatedApp from './components/StudentAuthenticatedApp';
import LecturerAuthenticatedApp from './components/LecturerAuthenticatedApp';
import  CourseManagementCard  from './components/Lecturercards/CourseManagementCard';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route to redirect to login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-authenticated-app/*" element={<StudentAuthenticatedApp />} />
        <Route path="/lecturer-authenticated-app/*" element={<LecturerAuthenticatedApp />} />
        <Route path="/CourseManagementCard" element={<CourseManagementCard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;