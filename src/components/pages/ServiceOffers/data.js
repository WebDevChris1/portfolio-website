import { CgWebsite } from "react-icons/cg";
import { FaRocket } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import React from "react";

const tierList = [
  {
    id: 1,
    available: true,
    icon: <CgWebsite />,
    title: "Tier 1",
    price: "Free",
    delivery: 7,
    revisions: 3,
    desc: [
      "Up to 2 Pages",
      "Design Customization",
      "Content Upload",
      "Include Source Code",
    ],
  },
  {
    id: 2,
    available: true,
    icon: <BsBarChartFill />,
    title: "Tier 2",
    price: "Free",
    delivery: 14,
    revisions: 3,
    desc: ["Tier 1 Perks", "Up to 4 Pages", "Responsive Design"],
  },
  {
    id: 3,
    available: false,
    icon: <FaRocket />,
    title: "Tier 3",
    price: null,
    delivery: 21,
    revisions: 3,
    desc: ["Tier 2 Perks", "Up to 5 Pages", "E-Commerce", "Admin Dashboard"],
  },
];

export default tierList;
