const weatherApi = require('./services/openWeatherMap.service')
const db = require('./models')

db.authenticate().then(() => console.log('eeeerree'))

// https://openweathermap.org/city/3451189
const cities = [
    {
        lat: -30.0331, 
        lon: -51.23, 
        name: 'Porto Alegre'
    }
]

const printResult = (city, dayForecast) => {
    console.log(city.name, '>', new Date(+dayForecast.dt * 1000)) 
    console.log('> temperature >',dayForecast.temp)
    console.log('> weather >',dayForecast.weather)
    console.log('> rain >',dayForecast.rain)
    console.log('------------------------------')
}

const getCityForecast = async (city) => {
    const result = await weatherApi.getForecastByCity(city.lat, city.lon)
    
    if (result) {
        result.data.daily.forEach(dayForecast => printResult(city, dayForecast))
    }

}

cities.forEach(getCityForecast)
