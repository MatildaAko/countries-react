import React, {useState} from "react";
import AllCountriesCards from "./AllCountriesCards";
import SingleCountryCard from "./SingleCountryCard"


const AllCountries = ({ searchTerm, allCountries, filterRegion }) => {
  const [isSingleCountry, setIsSingleCountry] = useState(false);
  const [singleCountry, setSingleCountry] = useState('');
  function handleSingleCountry(countryInfo) {
    setIsSingleCountry(true);
    setSingleCountry(countryInfo);
  }
  return (
    <div>
      {isSingleCountry ? (
          <SingleCountryCard
            country={singleCountry}
            setIsSingleCountry={setIsSingleCountry}
            allCountries={allCountries}
            handleSingleCountry={handleSingleCountry}
          />
      ) : (
        allCountries &&
        allCountries
          .filter((country) => {
            return filterRegion === null ? country : country.region.includes(filterRegion) && country;
          })
          .filter((country) => {
            return searchTerm === ""
              ? country
              : ((country.hasOwnProperty("capital") && country.capital.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  country.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
                  country;
          })
          .map((country) => {
            return <AllCountriesCards country={country} handleSingleCountry={handleSingleCountry} />;
          })
      )}
    </div>
  );
};

export default AllCountries;