import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./navbar.styles";
import { useGlobalContext } from "../../context";
import { pageRoutes, social } from "./data";

const Navbar = () => {
  const { bgColor } = useGlobalContext();
  return (
    <Wrapper bgColor={bgColor}>
      <Content>
        <div className="nav-links">
          <Link to={pageRoutes[0].path}>
            <h1>WebDevChris</h1>
          </Link>
          {pageRoutes.slice(0, 5).map((route) => {
            const { id, path, text } = route;
            return (
              <ul>
                <li key={id}>
                  <Link to={path}>{text}</Link>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="nav-social">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <ul>
                <li key={id}>
                  <a href={url} target="_blank" className="social-icon">
                    {icon}
                  </a>
                </li>
              </ul>
            );
          })}
          <Link className="contact" to={pageRoutes[5].path}>
            {pageRoutes[5].text}
          </Link>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
