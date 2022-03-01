import React from "react";
import { Wrapper, Content } from "./error.styles";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <Content>
        <h2>Lost?</h2>
        <p>
          There's no place like home <Link to="/">Home</Link>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Error;
