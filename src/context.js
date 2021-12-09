import React, { useState, useContext } from "react";
import offers from "./pages/ServiceOffers/data";
import stack from "./pages/About/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tierList, setTierList] = useState(offers);
  const [techStack, setTechStack] = useState(stack);
  const [bgColor, setBgColor] = useState("black");

  const changeBg = (id) => {
    console.log(id);
    if (id === "1") {
      setBgColor("black");
    } else if (id === "2") {
      setBgColor("yellow");
    } else if (id === "3") {
      setBgColor("green");
    } else if (id === "4") {
      setBgColor("blue");
    } else if (id === "5") {
      setBgColor("red");
    }
  };

  return (
    <AppContext.Provider value={{ tierList, techStack, bgColor, changeBg }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
