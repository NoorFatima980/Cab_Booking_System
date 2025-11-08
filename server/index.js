// server/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const bookingsRouter = require('./routes/bookings');
const driverApplicationsRouter = require('./routes/driverApplications');
const carpoolRequestsRouter = require('./routes/carpoolRequests');
const getstartedRouter = require('./routes/getstarted'); // if you have it
const authRouter = require('./routes/auth');
const locationRouter = require('./routes/location');
const ridesRouter = require('./routes/rides');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/ride', ridesRouter);


// API routes
if (bookingsRouter) app.use('/api/bookings', bookingsRouter);
if (driverApplicationsRouter) app.use('/api/driver-applications', driverApplicationsRouter);
if (carpoolRequestsRouter) app.use('/api/carpool-requests', carpoolRequestsRouter);
if (getstartedRouter) app.use('/api/getstarted', getstartedRouter);
app.use('/api/auth', authRouter);
app.use('/api/location', locationRouter);

// Serve client build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/rydo';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error', err);
});





