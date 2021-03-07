const weatherService = require('../services/weather')

exports.configure = (app) => {
    app.post('/storeWeatherForToday', weatherService.storeDataForToday)
}