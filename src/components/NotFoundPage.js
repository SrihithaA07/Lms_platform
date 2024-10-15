// src/components/NotFoundPage.js
import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <a href="/dashboard">Go back to Dashboard</a>
    </div>
  );
};

export default NotFoundPage;
