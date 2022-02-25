import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./navbar.styles";
import { useGlobalContext } from "../../context";
import { pageRoutes } from "../../data";
import { social } from "./data";

const Navbar = () => {
  const { bgColor } = useGlobalContext();
  return (
    <Wrapper bgColor={bgColor}>
      <Content>
        <div className="nav-links">
          <Link to={pageRoutes[0].path}>
            <h1>WebDevChris</h1>
          </Link>
          <ul className="links-wrapper">
            {pageRoutes.slice(0, 5).map((route) => {
              const { id, path, text } = route;
              return (
                <li key={id}>
                  <Link to={path}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-social">
          <ul>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url} target="_blank" className="social-icon">
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <Link className="contact" to={pageRoutes[5].path}>
            {pageRoutes[5].text}
          </Link>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
