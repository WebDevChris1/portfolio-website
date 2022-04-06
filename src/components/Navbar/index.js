// imports
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import useWindowDimensions from "../../helpers/useWindowDimension";
import { Link } from "react-router-dom";
// data
import { social } from "./data";
import { pageRoutes } from "../../data";
// react icon
import { FaBars } from "react-icons/fa";
// styled components
import { Wrapper, Content } from "./navbar.styles";

// navbar component
const Navbar = () => {
  const { showLinks, setShowLinks } = useGlobalContext();
  const { width } = useWindowDimensions();

  // toggle showLinks
  useEffect(() => {
    if (width <= 800) {
      setShowLinks(false);
    }
  }, [width]);

  return (
    // component wrapper
    <Wrapper>
      {/* all content */}
      <Content>
        {/* header */}
        <div className="nav-header">
          {/* logo */}
          <Link to={pageRoutes.routes[0].path}>
            <h1>WebDevChris</h1>
          </Link>

          {/* nav toggle */}
          <button
            style={{ transform: showLinks ? "rotate(-90deg)" : "rotate(0)" }}
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/* links */}
        <div
          className="links-wrapper"
          style={{ top: showLinks ? "0" : "-450px" }}
        >
          <ul className="links">
            {/* map page routes */}
            {pageRoutes.routes
              .slice(0, pageRoutes.routes.length - 2)
              .map((route) => {
                const { id, path, text } = route;
                return (
                  <li key={id}>
                    <Link to={path}>{text}</Link>
                  </li>
                );
              })}
          </ul>

          {/* contact wrapper */}
          <div className="contact-wrapper">
            <ul className="social-icons">
              {/* map social media data */}
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* contact button */}
            <Link className="contact" to={pageRoutes.routes[5].path}>
              {pageRoutes.routes[pageRoutes.routes.length - 2].text}
            </Link>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
