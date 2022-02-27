import React from "react";
import { Wrapper, Content } from "./allUserProjects.styles";
import { useGlobalContext } from "../../../context";
import { Link } from "react-router-dom";
// import Projects from "../../../pages/Portfolio";
import { myUserProjects } from "../../pages/Portfolio/data";

const AllUserProjects = () => {
  return (
    <Wrapper>
      <Content>
        <div className="page-info">
          <h2>User Experience Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects">
          {myUserProjects.map((project) => {
            const { id, title, link, code, desc, img } = project;
            return (
              <div key={id} className="project" href={link}>
                <div className="img-wrapper">
                  <img src={img} className="zoom blur" />
                  <a href={link} target="_blank" className="view fade slide-up">
                    View
                  </a>
                  <a href={code} target="_blank" className="code fade slide-up">
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

export default AllUserProjects;
