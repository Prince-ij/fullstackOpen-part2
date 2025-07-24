import Search from './components/Search'
import CountryData from './components/CountryData'
import weatherService from './components/WeatherInfo'
import countryService from './services/countries'
import { useState, useEffect } from 'react'
import WeatherInfo from './components/WeatherInfo'

const App = () => {

  const [param, setParam] = useState('')
  const [matches, setMatches] = useState([])
  const [weatherData, setWeatherData] = useState([])

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
      weatherService
      .getWeatherData(...matches[0].latlng)
      .then(data => {
        setWeatherData(data)
      })
    } else {
      setMatches([])
    }
  },[param])

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
        matches.length === 1 ?
        <>
          <CountryData match={matches[0]} />
          <WeatherInfo name={matches[0].name.common}
                       temperature={weatherData.main.temp}
                       wind={weatherData.wind.speed}
                       icon={weatherData.weather[0].icon}/>
        </>
        :
         null
         }


    </>
  )
}

export default App
