import React, { useState, useContext, useEffect } from "react";
import emailjs from "emailjs-com";

//data
import offers from "./components/pages/ServiceOffers/data";
import { techStack } from "./components/pages/About/data";
import welcomeMsg from "./components/pages/Home/data";
import { myBlogs } from "./components/pages/Blog/data";
import projects from "./components/Projects/data";

import useReverseArray from "./helpers/useReverseArray";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tierList, setTierList] = useState(offers);
  const [myTechStack, setTechStack] = useState(techStack);
  const [msg, setMsg] = useState(welcomeMsg);
  const [sendEmail, setSendEmail] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [featuredBlog, setFeaturedBlog] = useState(myBlogs.featured);
  const [allBlogs, setAllBlogs] = useState(useReverseArray(myBlogs.blogs));
  const [myProjects, setMyProjects] = useState(projects);

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
        myTechStack,
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
        featuredBlog,
        allBlogs,
        setAllBlogs,
        myProjects,
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
