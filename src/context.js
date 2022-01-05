import React, { useState, useContext, useEffect } from "react";
import emailjs from "emailjs-com";
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
  const [sendEmail, setSendEmail] = useState("Submit");

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

    emailjs
      .sendForm(
        "service_sut2owl",
        "template_oh7uuel",
        e.target,
        "user_FLpD0WW5oi0KL9K4eHddp"
      )
      .then(
        (result) => {
          if ((result.text = "OK")) {
            setSendEmail("Sent!");
          } else {
            setSendEmail("Error! Please try again");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setTimeout(() => {
      setSendEmail("Submit");
    }, 3000);
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
        sendEmail,
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
