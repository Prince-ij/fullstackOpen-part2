import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'

const getMatch = (param) => {
    const request = axios
    .get(`${baseUrl}/api/all`)
    .then(response => {
        const countries = response.data
        const matches = countries.filter(
            country => country.name.common.toLowerCase().includes(param.toLowerCase())
        )
        return matches
    })
    return request

}

export default {getMatch}
