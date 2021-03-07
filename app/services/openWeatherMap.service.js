const axios = require('axios')

const apiKey = process.ENV.OPENWEATHERAPI_KEY

// https://openweathermap.org/api/one-call-api

const getForecastByCity = (lat,lon) => {
    return null
    let url = "https://api.openweathermap.org/data/2.5/onecall?cnt=1&units=metric&exclude=current,minutely";

    url += `&lat=${lat}&lon=${lon}`

    url = url + "&APPID=" + apiKey;

    return _get(url)
};

const _get = (url) => {
    return axios.get(url)
};

module.exports = {
    getForecastByCity
}