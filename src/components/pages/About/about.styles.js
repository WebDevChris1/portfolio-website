import styled from "styled-components";
import aboutImage from "./images/about-me-image.jpeg";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
  padding: 0 15px 15px 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid green; */
  text-align: center;

  p {
    text-align: left;
    text-indent: 50px;
    /* border: 1px solid yellow; */
  }

  ul {
    list-style-type: none;
    line-height: 2rem;
    display: flex;
  }

  li {
    text-align: center;
    margin: 0 20px;
  }

  h2 {
    font-size: 7rem;
  }

  .hero {
    height: 90vh;
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tech-stack-wrapper {
    height: 200px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0;

    h3 {
      text-align: center;
      font-size: 2rem;
      /* border: 1px solid orange; */
    }
  }

  .tech-stack {
    /* border: 1px solid blue; */
    overflow-x: scroll;
    white-space: nowrap;
    height: 100px;
    align-items: center;
  }

  .icon {
    text-align: center;
    font-size: 3rem;
    /* border: 1px solid orange; */
  }

  @media screen and (min-width: 800px) {
    .hero {
      font-size: 16vh;
    }
  }
`;

export const Image = styled.img`
  /* border: 1px solid yellow; */
  height: 500px;
  width: 100%;
  background-image: url("${aboutImage}");
  background-position: center;
  background-size: cover;
`;
