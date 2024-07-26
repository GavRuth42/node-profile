const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const port = 3002;

app.use(bodyParser.json());

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Routes
const profileRoutes = require('./routes/profileRoutes');
app.use('/api/profiles', profileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

