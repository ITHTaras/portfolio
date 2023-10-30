"use client";

const { createContext, useContext, useState } = require("react");

export const GlobalContext = createContext("de");

export const GlobalContextProvider = ({ children }) => {
  const [lang, setLang] = useState("de");

  return (
    <GlobalContext.Provider value={{ lang, setLang }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
