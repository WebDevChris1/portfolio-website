import React from "react";
import { Wrapper, Content } from "./allToolProjects.styles";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import Projects from "../../Projects";
import Hero from "../../Hero/Hero";

const AllToolProjects = () => {
  const { myProjects } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <Hero text="Tools" />
        <section className="projects-wrapper">
          <Projects data={myProjects.toolProjects} />
        </section>
        <Link to="/portfolio" className="go-back">
          Return to Portfolio
        </Link>
      </Content>
    </Wrapper>
  );
};

export default AllToolProjects;
