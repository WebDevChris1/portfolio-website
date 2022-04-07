import React from "react";
import { Wrapper, Content } from "./portfolio.styles";
import { Link } from "react-router-dom";
import { pageRoutes } from "../../../data";
import { useGlobalContext } from "../../../context";
import Projects from "../../Projects";
import Hero from "../../Hero/Hero";

const Portfolio = () => {
  const { myProjects } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <Hero text="My Work" />

        <section className="projects-wrapper">
          {/* api */}
          <div>
            <div className="title-wrapper">
              <h3>API /</h3>
              <Link to={pageRoutes.subRoutes[0].path}>View All</Link>
            </div>

            <Projects data={myProjects.apiProjects} />
          </div>
          {/* user experience */}
          <div>
            <div className="title-wrapper">
              <h3>User Interface /</h3>
              <Link to={pageRoutes.subRoutes[1].path}>View All</Link>
            </div>
            <Projects data={myProjects.userProjects.slice(0, 3)} />
          </div>
          {/* tool */}
          <div>
            <div className="title-wrapper">
              <h3>Tools /</h3>
              <Link to={pageRoutes.subRoutes[2].path}>View All</Link>
            </div>
            <Projects data={myProjects.toolProjects.slice(0, 3)} />
          </div>
        </section>
      </Content>
    </Wrapper>
  );
};

export default Portfolio;
