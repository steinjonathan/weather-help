const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('CitiesWeather', 'postgres', 'stein', {
  host: 'postgres',
  dialect: 'postgres'
}) 

module.exports = sequelize