import React from "react";
import { Wrapper, Content } from "./allApiProjects.styles";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import Projects from "../../Projects";
import Hero from "../../Hero/Hero";

const AllApiProjects = () => {
  const { myProjects } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <Hero text="API" />
        <section className="projects-wrapper">
          <Projects data={myProjects.apiProjects} />
        </section>
        <Link to="/portfolio" className="go-back">
          Return to Portfolio
        </Link>
      </Content>
    </Wrapper>
  );
};

export default AllApiProjects;
