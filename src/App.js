import React, { useState, useEffect } from "react";
import "./App.css";
import AllCountries from "./allCountries";
import Header from "./Header";
import Search from "./Search";
import Select from "./Select";

function App() {
  const [allCountries, setAllCountries] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState(null);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => {
      setAllCountries(data);
    });
  }, [])
  return (
    <div className="App">
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <Select allCountries={allCountries} setFilterRegion={setFilterRegion} />
      <AllCountries allCountries={allCountries} searchTerm={searchTerm} filterRegion={filterRegion} setFilterRegion={setFilterRegion} />
    </div>
  );
}

export default App;
