import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import NotFoundPage from './components/NotFoundPage';
import AuthenticatedApp from './components/AuthenticatedApp'; // Import AuthenticatedApp

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/authenticated-app" element={<AuthenticatedApp />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};



export default App;
