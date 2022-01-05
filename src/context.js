import React, { useState, useContext, useEffect } from "react";
import offers from "./pages/ServiceOffers/data";
import stack from "./pages/About/data";
import welcomeMsg from "./pages/Home/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tierList, setTierList] = useState(offers);
  const [techStack, setTechStack] = useState(stack);
  const [bgColor, setBgColor] = useState("black");
  const [msg, setMsg] = useState(welcomeMsg);
  const [msgIndex, setMsgIndex] = useState(0);

  const changeBg = (id) => {
    if (id === "1") {
      setBgColor("black"); // black
    } else if (id === "2") {
      setBgColor("#FFC72C"); // yellow
    } else if (id === "3") {
      setBgColor("#00563B"); // green
    } else if (id === "4") {
      setBgColor("#1034A6"); // blue
    } else if (id === "5") {
      setBgColor("#D22B2B"); // red
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked!");
  };

  return (
    <AppContext.Provider
      value={{
        tierList,
        techStack,
        bgColor,
        changeBg,
        msg,
        setTierList,
        setTechStack,
        setMsg,
        setMsgIndex,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
