import React from "react";

const AllCountriesCards = ({ country, handleSingleCountry }) => {
  return (
    <div className="card">
      <img src={country.flags.png} className="card-img-top card-link" alt={`flag of ${country.name}`} onClick={() => handleSingleCountry(country)} />
      <h2 className="card-link" onClick={() => handleSingleCountry(country)}>
        {country.name}
      </h2>
      <p>
        <b>Population: </b>
        {country.population.toLocaleString()}
      </p>
      <p>
        <b>Region: </b>
        {country.region}
      </p>
      {country.capital && (
        <p>
          <b>Capital: </b>
          {country.capital}
        </p>
      )}
    </div>
  );
};

export default AllCountriesCards;