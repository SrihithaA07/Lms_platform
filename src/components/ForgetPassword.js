import React, { useState } from 'react';
import './Auth.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Password reset logic here
    console.log('Password reset for:', email);
    alert('Password reset instructions have been sent to your email');
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>
        Remember your password? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default ForgetPassword;
