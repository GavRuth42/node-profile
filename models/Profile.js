const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
    },
    profileCreated: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
}
