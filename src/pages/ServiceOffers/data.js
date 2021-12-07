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
    delivery: "7 Day Delivery",
    revisions: "3 Revisions",
    desc: [
      "1-2 Page",
      "Design Customization",
      "Content Upload",
      "Include Source Code",
    ],
  },
  {
    id: 2,
    icon: <BsBarChartFill />,
    title: "Tier 2",
    price: "Free",
    delivery: "14 Day Delivery",
    revisions: "3 Revisions",
    desc: [
      "3-4 Pages",
      "Design Customization",
      "Responsive Design",
      "Content Upload",
      "Include Source Code",
    ],
  },
  {
    id: 3,
    icon: <FaRocket />,
    title: "Tier 3",
    price: "Coming Soon",
    delivery: "21 Day Delivery",
    revisions: "3 Revisions",
    desc: [
      "Up to 5 Pages",
      "Design Customization",
      "Responsive Design",
      "Content Upload",
      "Include Source Code",
      "E-Commerce",
    ],
  },
];

export default tierList;
