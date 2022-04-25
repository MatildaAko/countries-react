import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
import "./App.css"

const Header = () => {
  const toggleTheme = useThemeUpdate()
  const darkTheme = useTheme()
  const themeStyles = {
    backgroundColor: darkTheme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: darkTheme ? "hsl(0, 0%, 100%)" : "#333",
  };

  return (
    <header style={themeStyles}>
      <h3>Where in the world?</h3>
      <button style={themeStyles} onClick={toggleTheme} className="dark-mode-btn">
        Dark Mode
      </button>
    </header>
  );
}

export default Header;