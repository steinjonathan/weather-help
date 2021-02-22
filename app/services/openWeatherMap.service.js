const axios = require('axios')

const apiKey = 'b9f89adf7879ccb7cba45b9db7c5c8d4'

// https://openweathermap.org/api/one-call-api

const getForecastByCity = (lat,lon) => {
    let url = "https://api.openweathermap.org/data/2.5/onecall?cnt=1&units=metric&exclude=current,minutely,hourly";

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