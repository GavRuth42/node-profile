const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Enable CORS
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Initialize Sequelize
const sequelize = new Sequelize('my_database', 'please2', 'Jaxon4266$', {
  host: 'ec2-3-215-102-128.compute-1.amazonaws.com',
  dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Define models and sync them
const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  bio: {
    type: Sequelize.TEXT
  }
});

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// Define routes
app.post('/profiles', async (req, res) => {
  try {
    const { name, email, age, bio } = req.body;
    const profile = await User.create({ name, email, age, bio });
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Error saving profile' });
  }
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});