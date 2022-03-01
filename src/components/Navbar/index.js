import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./navbar.styles";
import { useGlobalContext } from "../../context";
import { pageRoutes } from "../../data";
import { social } from "./data";
import { FaBars } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  const { bgColor, showLinks, setShowLinks } = useGlobalContext();

  return (
    <Wrapper bgColor={bgColor}>
      <Content>
        <div className="nav-header" bgColor={bgColor}>
          <Link to={pageRoutes[0].path}>
            <h1>WebDevChris</h1>
          </Link>

          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div
          className="links-wrapper"
          style={{ top: showLinks ? "0" : "-325px" }}
        >
          <ul className="links">
            {pageRoutes.slice(0, pageRoutes.length - 2).map((route) => {
              const { id, path, text } = route;
              return (
                <li key={id}>
                  <Link to={path}>{text}</Link>
                </li>
              );
            })}
          </ul>

          <div className="contact-wrapper">
            <ul className="social-icons">
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url} target="_blank">
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Link className="contact" to={pageRoutes[5].path}>
              {pageRoutes[pageRoutes.length - 2].text}
            </Link>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
