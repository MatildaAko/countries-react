import React from "react";
import { useTheme} from "./ThemeContext";

const AllCountriesCards = ({ country, handleSingleCountry }) => {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "hsl(209, 23%, 22%)" : "#FFF",
    color: darkTheme ? "#CCC" : "#333",
  };
  return (
    <div className="card" style={themeStyles}>
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