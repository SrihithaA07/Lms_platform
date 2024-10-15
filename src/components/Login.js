import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const defaultCredentials = {
    email: 'abc@gmail.com',
    password: 'abc@123',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Check if the credentials match the default credentials
    if (email === defaultCredentials.email && password === defaultCredentials.password) {
      console.log('Logged in successfully with:', formData);
      setErrorMessage(''); // Clear any previous error message
      navigate('/authenticated-app'); // Redirect to AuthenticatedApp (Dashboard in this case)
    } else {
      // If credentials are incorrect, show an error message
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Forgot your password? <a href="/forget-password">Reset it here</a>
      </p>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
