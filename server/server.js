const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Example stats route (Replace with actual DB calls)
app.get('/api/stats', (req, res) => {
  res.json({
    students: 0,
    lecturers: 0,
    administrators: 1,
    librarians: 300,
    supervisors: 660,
    labAssistance: 500,
    officeAssistance: 1700,
    others: 1250,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
