import React from "react";
import AllCountriesCards from "./AllCountriesCards";

const AllCountries = ({ searchTerm, allCountries, filterRegion }) => {
  return (
    <div>
      {allCountries != null &&
        allCountries.filter((country) => {
          return filterRegion === null ? country : country.region.includes(filterRegion) && country
        })
          .filter((country) => {
            return searchTerm === ""
              ? country
              : ((country.hasOwnProperty("capital") && country.capital.toLowerCase().includes(searchTerm)) ||
                  country.name.toLowerCase().includes(searchTerm)) &&
                  country;
          })
          .map((country) => {
            return <AllCountriesCards country={country} />;
          })}
    </div>
  );
};

export default AllCountries;