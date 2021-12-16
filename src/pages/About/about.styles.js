import styled from "styled-components";
import aboutImage from "./images/about-me-image.jpeg";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
`;

export const Content = styled.div`
  /* border: 1px solid blue; */
  .hero {
    /* border: 1px solid blue; */
    height: 90vh;
    display: flex;
    padding: 10px;
    h2 {
      /* border: 1px solid red; */
      font-size: 8rem;
      cursor: default;
      align-self: flex-end;
    }
  }
  .about-me {
    margin-top: 50px;
    padding: 0 50px;
    height: 95vh;
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
