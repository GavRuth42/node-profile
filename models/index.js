const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_database', 'please2', 'Jaxon4266$', {
  host: 'ec2-3-215-102-128.compute-1.amazonaws.com',
  dialect: 'mysql'
});

const Profile = require('./Profile')(sequelize);

const db = {
  sequelize,
  Sequelize,
  Profile
};

module.exports = db;
