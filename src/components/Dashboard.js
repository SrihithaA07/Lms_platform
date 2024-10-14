// src/components/Dashboard.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import './Dashboard.css';

const Dashboard = () => {
  const trafficData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Students',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
      {
        label: 'Teachers',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="chart-container">
        <h3>Website Traffic</h3>
        <Line data={trafficData} />
      </div>
    </div>
  );
};

export default Dashboard;
