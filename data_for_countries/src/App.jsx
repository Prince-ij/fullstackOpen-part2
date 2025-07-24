import Search from './components/Search'
import CountryData from './components/CountryData'
import weatherService from './services/weather'
import countryService from './services/countries'
import { useState, useEffect } from 'react'
import WeatherInfo from './components/WeatherInfo'

const App = () => {

  const [param, setParam] = useState('')
  const [matches, setMatches] = useState([])
  const [weatherData, setWeatherData] = useState(null)

  const handleSearch = (e) => {
    setParam(e.target.value)
  }

  useEffect(() => {
    if (param) {
      countryService
      .getMatch(param)
      .then(matches => {
        setMatches(matches)
      })
    } else {
      setMatches([])
    }
  },[param])

  useEffect(() => {
    if (matches.length === 1) {
      const [lat, lon] = matches[0].latlng
      weatherService.getWeatherData(lat, lon).then(data => {
        setWeatherData(data)
      })
      .catch(err => {
        console.log('weather===>', err)
      })
    }
  }, [matches])

  const showCountry = (name) => {
    const country = matches.find(p => p.name.common === name)
    setMatches([country])
  }

  return (
    <>
      <Search
        onChange={handleSearch}
        searchVal={param}
        notification='Too many matches, specify another filter'
        countryMatches={matches}
        onClick={showCountry}
        />
        {
        matches.length === 1 && weatherData?
        <>
          <CountryData match={matches[0]} />
          <WeatherInfo name={matches[0].name.common}
                       temperature={weatherData.main.temp}
                       wind={weatherData.wind.speed}
                       icon={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
        </>
        :
         null
         }


    </>
  )
}

export default App
