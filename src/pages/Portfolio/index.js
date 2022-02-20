import React from "react";
import { Wrapper, Content } from "./portfolio.styles";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

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
              const { id, desc, link, code, img, title } = project;
              return (
                <div key={id} className="project" href={link}>
                  <div className="img-wrapper">
                    <img src={img} className="zoom blur" />
                    <a
                      href={link}
                      target="_blank"
                      className="view fade slide-up"
                    >
                      View
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      className="code fade slide-up"
                    >
                      Code
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
          <div className="title-wrapper">
            <h3>User Experience</h3>
            <Link to="/portfolio/all-user-experience-projects">View All</Link>
          </div>
          <div className="projects">
            {myUserProjects.slice(0, 3).map((project) => {
              const { id, desc, link, code, img, title } = project;
              return (
                <div key={id} className="project" href={link}>
                  <div className="img-wrapper">
                    <img src={img} className="zoom blur" />
                    <a
                      href={link}
                      target="_blank"
                      className="view fade slide-up"
                    >
                      View
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      className="code fade slide-up"
                    >
                      Code
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
          <div className="title-wrapper">
            <h3>Tools</h3>
            <a href="#">View All</a>
          </div>
          <div className="projects">
            {myToolProjects.slice(0, 3).map((project) => {
              const { id, desc, link, code, img, title } = project;
              return (
                <div key={id} className="project" href={link}>
                  <div className="img-wrapper">
                    <img src={img} className="zoom blur" />
                    <a
                      href={link}
                      target="_blank"
                      className="view fade slide-up"
                    >
                      View
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      className="code fade slide-up"
                    >
                      Code
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
