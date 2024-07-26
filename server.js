const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const mysql = require('mysql');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Your React app URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const port = 3002;

app.use(bodyParser.json());

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Routes
const profileRoutes = require('./routes/profileRoutes');
app.use('/profiles', profileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

