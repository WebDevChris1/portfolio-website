import React, { useState, useContext, useEffect } from "react";
import emailjs from "emailjs-com";

//data
import offers from "./components/pages/ServiceOffers/data";
import stack from "./components/pages/About/data";
import welcomeMsg from "./components/pages/Home/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tierList, setTierList] = useState(offers);
  const [techStack, setTechStack] = useState(stack);
  const [msg, setMsg] = useState(welcomeMsg);
  const [sendEmail, setSendEmail] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    setShowLinks(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_sut2owl",
        "template_oh7uuel",
        e.target,
        "user_FLpD0WW5oi0KL9K4eHddp"
      )
      .then((result) => {
        if (result.text === "OK") {
          setSendEmail("Sent!");
          setIsLoading(false);
          e.target.reset();
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setSendEmail("Error! Please try again");
        console.log(err.text);
        e.target.reset();
      });

    setTimeout(() => {
      setSendEmail("Submit");
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        tierList,
        techStack,
        msg,
        setTierList,
        setTechStack,
        setMsg,

        handleSubmit,
        sendEmail,
        isLoading,
        setIsLoading,
        showLinks,
        setShowLinks,
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
