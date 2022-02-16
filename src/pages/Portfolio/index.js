import React from "react";
import { Wrapper, Content } from "./portfolio.styles";
import { useGlobalContext } from "../../context";

const Projects = () => {
  const { myProjects } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <section className="hero">
          <h2>Projects</h2>
        </section>
        <section className="projects">
          {myProjects.map((project) => {
            const { id, desc, link, title } = project;
            return (
              <div key={id}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={link}>check it out!</a>
              </div>
            );
          })}
        </section>
      </Content>
    </Wrapper>
  );
};

export default Projects;
