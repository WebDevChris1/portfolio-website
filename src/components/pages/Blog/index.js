import React from "react";
import { Wrapper, Content } from "./blog.styles";
import { useGlobalContext } from "../../../context";

const Blog = () => {
  const { showLinks } = useGlobalContext();
  return (
    <Wrapper style={{ opacity: showLinks ? ".4" : "1" }}>
      <Content>
        <div>Blog</div>;
      </Content>
    </Wrapper>
  );
};

export default Blog;
