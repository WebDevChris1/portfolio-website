import React from "react";
import { Wrapper, Content } from "./allToolProjects.styles";
import { Link } from "react-router-dom";
import { myToolProjects } from "../../pages/Portfolio/data";

const AllToolProjects = () => {
  return (
    <Wrapper>
      <Content>
        <div className="page-info">
          <h2>Tool Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects">
          {myToolProjects.map((project) => {
            const { id, title, link, code, desc, img } = project;
            return (
              <div key={id} className="project" href={link}>
                <div className="img-wrapper">
                  <img src={img} className="zoom blur" />
                  <a
                    href={link}
                    target="_blank"
                    className="view fade slide-down"
                  >
                    View
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    className="code fade slide-dowm"
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
        <Link to="/portfolio">Return to Portfolio</Link>
      </Content>
    </Wrapper>
  );
};

export default AllToolProjects;
