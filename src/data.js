import React from "react";

// pages
import Home from "./pages/Home/";
import About from "./pages/About/";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error/";
import Contact from "./pages/Contact/";
import Services from "./pages/ServiceOffers/";
import Blog from "./pages/Blog/";

//sub pages
import AllUserProjects from "./components/sub-pages/AllUserProjects";
import AllToolProjects from "./components/sub-pages/AllToolProjects";

export const pageRoutes = [
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
];

export const subPageRoutes = [
  {
    id: 1,
    path: "/portfolio/all-user-experience-projects",
    page: <AllUserProjects />,
  },
  {
    id: 2,
    path: "/portfolio/all-tool-projects",
    page: <AllToolProjects />,
  },
];
