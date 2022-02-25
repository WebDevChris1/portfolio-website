import React from "react";

import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillCodepenCircle,
} from "react-icons/ai";

export const pageRoutes = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/portfolio",
    text: "Portfolio",
  },
  {
    id: 4,
    path: "/blog",
    text: "Blog",
  },
  {
    id: 5,
    path: "/services",
    text: "Services",
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];

export const subPageRoutes = [
  {
    id: 1,
    path: "/portfolio/all-user-experience-projects",
  },
  {
    id: 2,
    path: "/portfolio/all-tool-projects",
  },
];

export const social = [
  {
    id: 1,
    url: "https://codepen.io/WebDevChris",
    icon: <AiFillCodepenCircle />,
  },
  {
    id: 2,
    url: "https://github.com/WebDevChris1",
    icon: <AiFillGithub />,
  },
  {
    id: 3,
    url: "https://twitter.com/webdevchris1",
    icon: <AiFillTwitterCircle />,
  },
];
