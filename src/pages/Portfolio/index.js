import React from "react";
import { Wrapper, Content } from "./portfolio.styles";
import { useGlobalContext } from "../../context";
import { BsArrowRightShort } from "react-icons/bs";

const Projects = () => {
  const { myApiProjects, myUserProjects, myToolProjects } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <section className="hero">
          <h2>My Work</h2>
        </section>
        <section>
          <h3>API</h3>
          <div className="projects">
            {myApiProjects.map((project) => {
              const { id, desc, link, img, title } = project;
              return (
                <div key={id} className="project" href={link}>
                  <div className="img-wrapper">
                    <img src={img} className="zoom blur" />
                    <a href={link} target="_blank" className="fade slide-up">
                      View
                    </a>
                  </div>
                  <div className="project-desc">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h3>User Experience</h3>
          <div className="projects">
            {myUserProjects.map((project) => {
              const { id, desc, link, img, title } = project;
              return (
                <div key={id} className="project" href={link}>
                  <div className="img-wrapper">
                    <img src={img} className="zoom blur" />
                    <a href={link} target="_blank" className="fade slide-up">
                      View
                    </a>
                  </div>
                  <div className="project-desc">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h3>Tools</h3>
          <div className="projects">
            {myToolProjects.map((project) => {
              const { id, desc, link, img, title } = project;
              return (
                <div key={id} className="project" href={link}>
                  <div className="img-wrapper">
                    <img src={img} className="zoom blur" />
                    <a href={link} target="_blank" className="fade slide-up">
                      View
                    </a>
                  </div>
                  <div className="project-desc">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Content>
    </Wrapper>
  );
};

export default Projects;
