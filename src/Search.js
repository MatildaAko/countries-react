import React from "react";

const Search = ({setSearchTerm}) => {
  return (
    <div>
      <input
        type="search"
        className="search-bar"
        placeholder="Search for a country..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default Search;