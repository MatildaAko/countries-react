import React from "react";

const AllCountriesCards = ({ country }) => {
  return (<div className="card">
    <img src={country.flags.png} className="card-img-top" alt={`flag of ${country.name}`} />
    <h2>{country.name}</h2>
    <p>
      <b>Population: </b>
      {country.population.toLocaleString()}
    </p>
    <p>
      <b>Region: </b>
      {country.region}
    </p>
    <p>
      <b>Capital: </b>
      {country.capital}
    </p>
  </div>);
}

export default AllCountriesCards;