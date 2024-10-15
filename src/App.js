import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import StudentAuthenticatedApp from './components/StudentAuthenticatedApp'; // Import Student Authenticated App
import LecturerAuthenticatedApp from './components/LecturerAuthenticatedApp'; // Import Lecturer Authenticated App

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-authenticated-app/*" element={<StudentAuthenticatedApp />} />
        <Route path="/lecturer-authenticated-app/*" element={<LecturerAuthenticatedApp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
