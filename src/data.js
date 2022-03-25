import React from "react";

// pages
import Home from "./components/pages/Home/";
import About from "./components/pages/About/";
import Portfolio from "./components/pages/Portfolio";
import Error from "./components/pages/Error/";
import Contact from "./components/pages/Contact/";
import Services from "./components/pages/ServiceOffers/";
import Blog from "./components/pages/Blog";

//sub pages
import AllUserProjects from "./components/sub-pages/AllUserProjects";
import AllToolProjects from "./components/sub-pages/AllToolProjects";
import AllApiProjects from "./components/sub-pages/AllApiProjects";

export const pageRoutes = {
  routes: [
    {
      id: 1,
      path: "/",
      text: "Home",
      page: <Home />,
    },
    {
      id: 2,
      path: "/about",
      text: "About",
      page: <About />,
    },
    {
      id: 3,
      path: "/portfolio",
      text: "Portfolio",
      page: <Portfolio />,
    },
    {
      id: 4,
      path: "/blog",
      text: "Blog",
      page: <Blog />,
    },
    {
      id: 5,
      path: "/services",
      text: "Services",
      page: <Services />,
    },
    {
      id: 6,
      path: "/contact",
      text: "Contact",
      page: <Contact />,
    },
    {
      id: 7,
      path: "*",
      text: "Home",
      page: <Error />,
    },
  ],
  subRoutes: [
    {
      id: 1,
      path: "/portfolio/api-projects",
      page: <AllApiProjects />,
    },
    {
      id: 2,
      path: "/portfolio/user-experience-projects",
      page: <AllUserProjects />,
    },
    {
      id: 3,
      path: "/portfolio/tool-projects",
      page: <AllToolProjects />,
    },
  ],
};
