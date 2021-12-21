import styled from "styled-components";
import aboutImage from "./images/about-me-image.jpeg";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
`;

export const Content = styled.div`
  /* border: 1px solid blue; */
  .hero {
    /* border: 1px solid blue; */
    height: 100vh;
    display: flex;
    padding-left: 30px;
    padding-bottom: 20px;
    h2 {
      /* border: 1px solid red; */
      font-size: 9rem;
      cursor: default;
      align-self: flex-end;
    }
  }
  .about-me {
    /* border: 1px solid red; */
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .second-section {
      display: flex;
      justify-content: space-between;
      /* border: 1px solid blue; */

      .tech-stack {
        /* border: 1px solid red; */
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const Image = styled.div`
  height: 500px;
  width: 500px;
  background-image: url("${aboutImage}");
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;
