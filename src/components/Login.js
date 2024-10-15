  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './Auth.css'; // Create a common CSS file for login, register, and forgot password

  const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '', role: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const defaultCredentials = {
      student: { email: 's@gmail.com', password: 's123' },
      lecturer: { email: 'lecturer@gmail.com', password: 'lecturer@123' },
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const { email, password, role } = formData;

      // Check if the credentials match the default credentials
      if (
        defaultCredentials[role]?.email === email &&
        defaultCredentials[role]?.password === password
      ) {
        console.log('Logged in successfully with:', formData);
        setErrorMessage(''); // Clear any previous error message

        // Navigate to respective authenticated app based on role
        if (role === 'student') {
          navigate('/student-authenticated-app'); // Redirect to Student Authenticated App
        } else if (role === 'lecturer') {
          navigate('/lecturer-authenticated-app'); // Redirect to Lecturer Authenticated App
        }
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
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
          </select>
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
