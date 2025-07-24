import axios from "axios";
const API_KEY = '8c8bc11a5c76f15c50fa5c29551dcb54'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'


const getWeatherData = (lat, lon, appid=API_KEY) => {
    console.log('sending request............')
    console.log('latlng====>', lat, lon)
    const request = axios
    .get(`${baseUrl}`, {
        params: {
            lat: lat,
            lon: lon,
            appid: appid
        }
    })
    .then(response => {
        console.log('data===>', response.data)
        return response.data
    })
    return request
}

export default { getWeatherData }
