const weatherApi = require('./services/openWeatherMap')
const db = require('./datasource/postgres')

require('dotenv').config()

db.authenticate().then(() => console.log('Postgre Connected Succesfuly'))

