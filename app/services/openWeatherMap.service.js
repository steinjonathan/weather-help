const axios = require('axios')

const apiKey = process.ENV.OPENWEATHERAPI_KEY

// https://openweathermap.org/api/one-call-api

const getForecastByCity = (lat,lon) => {
    return null
    let url = "https://api.openweathermap.org/data/2.5/onecall?cnt=1&units=metric&exclude=current,minutely";

    url += `&lat=${lat}&lon=${lon}`

    url = url + "&APPID=" + apiKey;

    return _get(url)
}

const _get = (url) => {
    return axios.get(url)
}

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

module.exports = {
    getForecastByCity
}