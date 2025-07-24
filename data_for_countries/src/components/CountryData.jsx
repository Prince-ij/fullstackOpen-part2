const CountryData = ({match}) => {
  const langs = Object.values(match.languages).map(language => <li key={language}>{language}</li>)
  return (
    <>
      <h1>{match.name.common}</h1>
      <p>Capital {match.capital[0]}</p>
      <p>Area {match.area}</p>

      <h2>Languages</h2>
      {langs}

      <img src={match.flags.png} alt={`flag of ${match.name.common}`} />
    </>
  )
}

export default CountryData
