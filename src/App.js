import React, { useState, useEffect } from "react";
import "./App.css";
import AllCountries from "./allCountries";
import Header from "./Header";
import Search from "./Search";
import Select from "./Select";
import { ThemeProvider, useTheme} from "./ThemeContext";

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
    <ThemeProvider>
      <PageWrapper >
        <Header />
        <Search setSearchTerm={setSearchTerm} />
        <Select allCountries={allCountries} setFilterRegion={setFilterRegion} />
        <AllCountries allCountries={allCountries} searchTerm={searchTerm} filterRegion={filterRegion} setFilterRegion={setFilterRegion} />
      </PageWrapper>
    </ThemeProvider>
  );
}

const PageWrapper = ({ children }) => {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    color: darkTheme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
  };
  return <div className="App" style={themeStyles}>{children}</div>
}

export default App;
