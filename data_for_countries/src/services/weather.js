import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'


const getWeatherData = (lat, lon, appid=API_KEY) => {
    const request = axios
    .get(`${baseUrl}`, {
        params: {
            lat: lat,
            lon: lon,
            appid: appid
        }
    })
    .then(response => {
        return response.data
    })
    return request
}

export default { getWeatherData }
