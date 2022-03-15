import styled from "styled-components";
import aboutImage from "./images/about-me-image.jpeg";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
  padding: 0 10px 10px 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    text-align: center;
  }

  ul {
    list-style-type: none;
    line-height: 2rem;
    display: flex;
    justify-content: space-around;
  }

  li {
    text-align: center;
  }

  .hero {
    height: 90vh;
    /* border: 1px solid blue; */
    display: flex;
    align-items: flex-end;
    font-size: 11vh;
    padding-bottom: 10px;
  }

  .tech-stack-wrapper {
    height: 175px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;

    h3 {
      text-align: center;
      font-size: 2rem;
    }
  }

  .tech-stack {
    /* border: 1px solid blue; */
  }

  .icon {
    text-align: center;
    font-size: 3rem;
  }

  @media screen and (min-width: 800px) {
    .hero {
      font-size: 16vh;
    }
  }
`;

export const Image = styled.img`
  height: 500px;
  width: 100%;
  background-image: url("${aboutImage}");
  background-position: center;
  background-size: cover;
`;
