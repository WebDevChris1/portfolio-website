import React from "react";
import { FaEye } from "react-icons/fa";
import { MdSource } from "react-icons/md";

const Projects = ({ data }) => {
  return (
    <div className="projects">
      {data.map((project) => {
        const { id, title, link, code, desc, img } = project;
        return (
          <div key={id} className="project">
            <div className="img-wrapper">
              <img src={img} alt="preview" className="zoom blur" />
              <a
                href={code}
                target="_blank"
                className="code fade slide-down"
                rel="noopener noreferrer"
              >
                <MdSource style={{ fill: "black" }} />
              </a>
              <a
                href={link}
                target="_blank"
                className="view fade slide-down"
                rel="noopener noreferrer"
              >
                <FaEye style={{ fill: "black" }} />
              </a>
            </div>
            <div className="project-desc">
              <h4>{title}</h4>
              <p>{desc}</p>
              <div className="link-wrapper">
                <a href={link} className="view">
                  <FaEye />
                </a>
                <a href={link} className="code">
                  <MdSource />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
