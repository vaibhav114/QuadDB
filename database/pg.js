const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

// Test the connection
sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
