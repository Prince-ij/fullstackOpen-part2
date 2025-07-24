const WeatherInfo = ({name, temperature, wind , icon}) => {
  return (
    <>
      <h2>Weather in {name}</h2>
      <p>Temperature {temperature} Celcius</p>
      <img src={icon} alt={`Weather Icon for {name}`} />
      <p>Wind {wind} m/s</p>
    </>

  )
}

export default WeatherInfo
