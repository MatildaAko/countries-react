import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
// import  from "react-bootstrap";

const Select = ({ setFilterRegion, allCountries }) => {
  const regions = [];
  allCountries != null &&
    allCountries.map((country) => {
      return !regions.includes(country.region) && regions.push(country.region);
    });
  regions.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
  // console.log(regions)
  return (
    <DropdownButton id="dropdown-basic-button" title="Filter Region" onSelect={(event) => setFilterRegion(event)}>
      {regions.map((region) => {
        return (
          <Dropdown.Item eventKey={region}
        >
            {region}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
}

export default Select