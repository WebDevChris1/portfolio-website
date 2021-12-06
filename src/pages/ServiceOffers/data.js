import { CgWebsite } from "react-icons/cg";
import { FaRocket } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import React from "react";
const tierList = [
  {
    id: 1,
    icon: <CgWebsite />,
    title: "Tier 1",
    price: "Free",
    desc: ["Free consultation", "Single Page"],
  },
  {
    id: 2,
    icon: <BsBarChartFill />,
    title: "Tier 2",
    price: "Free",
    desc: ["Free consultation", "Up to 3 Pages", "Responsive & fast layout"],
  },
  {
    id: 3,
    icon: <FaRocket />,
    title: "Tier 3",
    price: "$50",
    desc: ["Free consultation", "Up to 5 Pages", "Responsive & fast layout"],
  },
];

export default tierList;
