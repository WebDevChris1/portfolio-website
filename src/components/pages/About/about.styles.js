//imports
import styled from "styled-components";

export const Wrapper = styled.main`
  // component wrapper global styles
  padding: 0 15px 15px 15px;
`;

export const Content = styled.div`
  // component content global styles
  display: flex;
  flex-direction: column;
  gap: 60px;
  text-align: center;

  br {
  }

  /* general styles */
  p {
    text-align: left;
    text-indent: 50px;
  }

  h2 {
    font-size: 7rem;
    text-align: center;
  }

  ul {
    list-style-type: decimal;
    height: 200px;
    padding-left: 20px;
  }

  li {
    margin-top: 10px;
  }

  /* hero */
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* tech stack */
  .tech-stack-wrapper {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0;
    h3 {
      text-align: center;
      font-size: 2rem;
    }
  }

  .tech-stack {
    overflow-y: scroll;
    white-space: nowrap;
    align-items: center;
    text-align: center;
    height: 95px;
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  /* show scrollbar tech stack */
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

  /* tech stack icon */
  .icon {
    text-align: center;
    font-size: 3rem;
  }

  /* goals */

  /* desktop */
  @media screen and (min-width: 800px) {
    br {
      display: block;
    }
    /* hero */
    .hero {
      font-size: 16vh;
    }

    /* about me */
    .about-me {
      width: 80%;
      align-self: center;
    }

    /* tech stack */
    .tech-stack-wrapper {
      justify-content: space-between;
      align-items: center;
      height: 370px;
      h3 {
        font-size: 3rem;
      }
    }

    .tech-stack {
      width: 100%;
      align-self: center;
      height: 250px;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }

    /* hide scroll bar */
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
  /* component image global styles */
  height: 500px;
  width: 100%;
  background-image: url("https://res.cloudinary.com/webdevchris/image/upload/v1647919180/portfolio%20site/mobile-image_qh3qsl.jpg");
  background-position: center;
  background-size: cover;

  /* desktop */
  @media screen and (min-width: 800px) {
    background-image: url("https://res.cloudinary.com/webdevchris/image/upload/v1647919180/portfolio%20site/desktop-image_yrplea.jpg");
  }
`;
