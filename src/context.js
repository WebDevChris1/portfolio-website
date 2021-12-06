import React, { useState, useContext } from "react";
import data from "./pages/ServiceOffers/data";

console.log(data);

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tierList, setTierList] = useState(data);

  return (
    <AppContext.Provider value={{ tierList }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
