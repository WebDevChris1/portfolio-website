import React from "react";
import { Wrapper, Content } from "./portfolio.styles";
import { Link } from "react-router-dom";
import { subPageRoutes } from "../../../data";
import { myApiProjects, myUserProjects, myToolProjects } from "./data";

const Projects = () => {
  return (
    <Wrapper>
      <Content>
        <section className="hero">
          <h2>My Work</h2>
        </section>
        <section>
          <div className="projects-wrapper">
            {/* api */}
            <div className="title-wrapper">
              <h3>API</h3>
            </div>
            <div className="projects">
              {myApiProjects.map((project) => {
                const { id, desc, link, code, img, title } = project;
                return (
                  <div key={id} className="project" href={link}>
                    <div className="img-wrapper">
                      <img src={img} alt="preview" className="zoom blur" />
                      <a
                        href={link}
                        target="_blank"
                        className="view fade slide-down"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                      <a
                        href={code}
                        target="_blank"
                        className="code fade slide-down"
                        rel="noopener noreferrer"
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

            {/* user experience */}
            <div className="title-wrapper">
              <h3>User Experience</h3>
              <Link to={subPageRoutes[0].path}>View All</Link>
            </div>
            <div className="projects">
              {myUserProjects.slice(0, 3).map((project) => {
                const { id, desc, link, code, img, title } = project;
                return (
                  <div key={id} className="project" href={link}>
                    <div className="img-wrapper">
                      <img src={img} alt="preview" className="zoom blur" />
                      <a
                        href={link}
                        target="_blank"
                        className="view fade slide-down"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                      <a
                        href={code}
                        target="_blank"
                        className="code fade slide-down"
                        rel="noopener noreferrer"
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

            {/* tool */}
            <div className="title-wrapper">
              <h3>Tools</h3>
              <Link to={subPageRoutes[1].path}>View All</Link>
            </div>
            <div className="projects">
              {myToolProjects.slice(0, 3).map((project) => {
                const { id, desc, link, code, img, title } = project;
                return (
                  <div key={id} className="project" href={link}>
                    <div className="img-wrapper">
                      <img src={img} alt="preview" className="zoom blur" />
                      <a
                        href={link}
                        target="_blank"
                        className="view fade slide-up"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                      <a
                        href={code}
                        target="_blank"
                        className="code fade slide-up"
                        rel="noopener noreferrer"
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
          </div>
        </section>
      </Content>
    </Wrapper>
  );
};

export default Projects;
