import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./navbar.styles";
import { useGlobalContext } from "../../context";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillCodepenCircle,
} from "react-icons/ai";

const Navbar = () => {
  const { bgColor } = useGlobalContext();
  return (
    <Wrapper bgColor={bgColor}>
      <Content>
        <div className="nav-links">
          <Link to="/">
            <h1>WebDevChris</h1>
          </Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/services">Services</Link>
        </div>
        <div className="nav-social">
          <a
            href="https://codepen.io/WebDevChris"
            target="_blank"
            className="social-icon"
          >
            <AiFillCodepenCircle />
          </a>
          <a
            href="https://github.com/WebDevChris1"
            target="_blank"
            className="social-icon"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/webdevchris1"
            target="_blank"
            className="social-icon"
          >
            <AiFillTwitterCircle />
          </a>
          <Link className="contact" to="/contact">
            Contact
          </Link>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
