const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const mysql = require('mysql');

const app = express();
// Enable CORS
app.use(cors());

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

