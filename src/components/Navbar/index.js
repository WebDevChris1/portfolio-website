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
  const linksWrapperRef = useRef(null);
  const socialWrapperRef = useRef(null);
  const linksRef = useRef(null);
  const socialRef = useRef(null);
  useEffect(() => {
    if (showLinks) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      const socialHeight = socialRef.current.getBoundingClientRect().height;
      linksWrapperRef.current.style.height = `150px`;
      socialWrapperRef.current.style.height = `43px`;
    } else {
      linksWrapperRef.current.style.height = "0px";
      socialWrapperRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <Wrapper bgColor={bgColor}>
      <Content>
        <div className="nav-header">
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

        <div className="links-wrapper" ref={linksWrapperRef}>
          <ul className="links" ref={linksRef}>
            {pageRoutes.slice(0, pageRoutes.length - 2).map((route) => {
              const { id, path, text } = route;
              return (
                <li key={id}>
                  <Link to={path}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-social" ref={socialWrapperRef}>
          <ul ref={socialRef}>
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
            {pageRoutes[pageRoutes.length - 2].text}
          </Link>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
