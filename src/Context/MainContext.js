import React, { createContext, useContext, useEffect, useState } from "react";

const mainContext = createContext();

export const useMainContext = () => useContext(mainContext);
const DarkMode = JSON.parse(localStorage.getItem("dark_mode"));
const MainContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(DarkMode || false);
  function setStirage() {
    localStorage.setItem("dark_mode", JSON.stringify(darkMode));
  }

  const values = {
    darkMode,
    setDarkMode,
  };
  useEffect(() => {
    setStirage();
  }, [darkMode]);
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default MainContext;
