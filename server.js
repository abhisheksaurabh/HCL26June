const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const staffRoutes = require('./routes/staffRoutes');
const shiftRoutes = require('./routes/shiftRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/healthcareScheduler');

app.use('/api/staff', staffRoutes);
app.use('/api/shifts', shiftRoutes);
app.use('/api/attendance', attendanceRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
