import React, { useState, useContext } from "react";
import offers from "./pages/ServiceOffers/data";
import stack from "./pages/About/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tierList, setTierList] = useState(offers);
  const [techStack, setTechStack] = useState(stack);

  return (
    <AppContext.Provider value={{ tierList, techStack }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
