import React from "react";
import { Wrapper, Content } from "../../Projects/projects.styles";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import Projects from "../../Projects";

const AllUserProjects = () => {
  const { myProjects } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <div className="page-info">
          <h2>User Experience</h2>
          <div className="underline"></div>
        </div>
        <Projects data={myProjects.userProjects} />
        <Link to="/portfolio" className="go-back">
          Return to Portfolio
        </Link>
      </Content>
    </Wrapper>
  );
};

export default AllUserProjects;
