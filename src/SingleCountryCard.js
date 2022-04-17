import React from "react";

const SingleCountryCard = ({ country, setIsSingleCountry, allCountries, handleSingleCountry }) => {
  function goBack() {
    setIsSingleCountry(false);
  }
  return (
    <div className="card">
      <button onClick={goBack}>Back</button>
      <div>
        <img src={country.flags.png} className="card-img-top" alt={`flag of ${country.name}`} />
        <h2>{country.name}</h2>
        <br />
        <p>
          <b>Native Name:</b>
          {country.nativeName}
        </p>
        <p>
          <b>Population:</b> {country.population.toLocaleString()}
        </p>
        <p>
          <b>Region:</b> {country.region}
        </p>
        <p>
          <b>Sub Region:</b> {country.subregion}
        </p>
        {country.capital && (
          <p>
            <b>Capital:</b> {country.capital}
          </p>
        )}

        <br />
        <p>
          <b>Top Level Domain: </b> {country.topLevelDomain.join(", ")}
        </p>
        <p>
          <b>Currencies: </b>
          {country.currencies.map((currency) => currency.name).join(", ")}
        </p>
        <p>
          <b>Languages: </b>
          {country.languages.map((language) => language.name).join(", ")}
        </p>
        <br />
        {country.borders && (
          <>
            <p>
              <b>Border Countries:</b>
            </p>
            {!Array.isArray(country.borders)
              ? country.borders.map((border) => <button onClick={() => handleSingleCountry(border)} >{border.name}</button>)
              : country.borders.map((border) => {
                  return (
                    <button onClick={() => handleSingleCountry(allCountries.filter((country) => country.alpha3Code.includes(border))[0])}>
                      {allCountries.filter((country) => country.alpha3Code.includes(border)).map((country) => country.name)}
                    </button>
                  );
                })}
          </>
        )}

      </div>
    </div>
  );
};

export default SingleCountryCard;
