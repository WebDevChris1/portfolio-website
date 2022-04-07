import React from "react";
import { Wrapper, Content } from "./allUserProjects.styles";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import Projects from "../../Projects";
import Hero from "../../Hero/Hero";

const AllUserProjects = () => {
  const { myProjects } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <Hero text="User Interface" />
        <section className="projects-wrapper">
          <Projects data={myProjects.userProjects} />
        </section>
        <Link to="/portfolio" className="go-back">
          Return to Portfolio
        </Link>
      </Content>
    </Wrapper>
  );
};

export default AllUserProjects;
