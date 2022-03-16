import styled from "styled-components";
import mobileImage from "./images/mobile-image.jpeg";
import desktopImage from "./images/desktop-image.jpeg";

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
    height: 180px;
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
    overflow-y: scroll;
    white-space: nowrap;
    align-items: center;
    text-align: center;
    height: 95px;
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .tech-stack::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .tech-stack::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  .tech > p {
    text-indent: 0;
    text-align: center;
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
  height: 500px;
  width: 100%;
  background-image: url("${mobileImage}");
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 800px) {
    background-image: url("${desktopImage}");
  }
`;

export const Button = styled.button`
  /* border: 1px solid red; */
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  margin: 5px;
  cursor: pointer;
`;
