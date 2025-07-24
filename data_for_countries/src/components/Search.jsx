const Search = ({searchVal, onChange, notification, countryMatches, onClick}) => {
  const matches = countryMatches.map(match => {
  return <p key={match.name.common}>
    {match.name.common}<button onClick={() => onClick(match.name.common)}>show</button>
    </p>
  })

 return (
  <>
    <p>find countries <input value={searchVal} onChange={onChange}/></p>

     {matches.length > 10 ? <p>{notification}</p> : matches.length > 1 ? <div>{matches}</div> : null}
  </>
 )
}

export default Search
