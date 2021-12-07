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
    delivery: "7 Days Delivery",
    revisions: "3 Revisions",
    desc: [
      "1+ Page",
      "Free consultation",
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
    delivery: "14 Days Delivery",
    revisions: "3 Revisions",
    desc: [
      "3+ Pages",
      "Free consultation",
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
    price: "$50",
    delivery: "21 Days Delivery",
    revisions: "3 Revisions",
    desc: [
      "5+ Pages",
      "Free consultation",
      "Design Customization",
      "Responsive Design",
      "Content Upload",
      "Include Source Code",
    ],
  },
];

export default tierList;
