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
  gap: 60px;
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

  ul {
    list-style-type: decimal;
    height: 200px;
    padding-left: 20px;
  }
  li {
    margin-top: 10px;
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

  .goals-wrapper {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* height: 500px; */
    height: 600px;
  }

  .goal-icon {
    /* border: 1px solid blue; */
    height: 60%;
    width: 500px;
  }

  .goals {
    height: 100%;
    width: 600px;
    border: 1px solid white;
    border-radius: 10px;
    text-align: left;
    padding: 10px 50px;

    h3 {
      text-align: center;
      font-size: 3rem;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid white;
      align-self: center;
    }

    h4 {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 800px) {
    .hero {
      font-size: 16vh;
    }

    .about-me {
      width: 80%;
      align-self: center;
    }

    .tech-stack-wrapper {
      justify-content: space-between;
      align-items: center;
      /* border: 1px solid red; */
      height: 370px;

      h3 {
        font-size: 3rem;
      }
    }

    .tech-stack {
      /* border: 1px solid blue; */
      width: 100%;
      align-self: center;
      height: 250px;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }

    .tech-stack::-webkit-scrollbar {
      background-color: transparent;
    }

    .tech-stack::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
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
