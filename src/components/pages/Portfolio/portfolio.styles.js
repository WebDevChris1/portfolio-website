import styled from "styled-components";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
  transition: opacity 1s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hero {
    border: 1px solid green;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 9rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  .title-wrapper {
    width: 90%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 5px;
  }

  .title-wrapper > a {
    text-decoration: none;
    /* border: 1px solid red; */
  }

  .projects-wrapper {
    width: 100vw;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    /* border: 1px solid blue; */
    gap: 2rem;
    margin-bottom: 1rem;
    width: 90%;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    .img-wrapper {
      height: 70%;
      position: relative;
      overflow: hidden;
      /* border: 1px solid red; */

      a {
        position: absolute;
        height: 100%;
        width: 50%;
        text-decoration: none;
        font-size: 2rem;
        background-color: rgba(255, 255, 255, 0.2);
        color: black;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .img-wrapper > img {
      display: block;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }

    .view {
      inset: 0;
      border-right: 1px solid black;
    }

    .view:hover {
      color: red;
    }

    .code {
      right: 0;
      top: 0;
    }

    .code:hover {
      color: red;
    }

    .img-wrapper > img,
    .img-wrapper > a {
      transition: 200ms ease-in-out;
    }

    .img-wrapper:hover > img.blur {
      filter: blur(5px);
    }

    /* .img-wrapper:hover > img.zoom {
      transform: scale(1.1);
    } */

    .img-wrapper > a.fade {
      opacity: 0;
    }

    .img-wrapper:hover > a.fade {
      opacity: 1;
    }

    // slide up animation

    .img-wrapper > a.slide-down {
      transform: translateY(-100%);
    }

    .img-wrapper:hover > a.slide-down {
      transform: translateY(0);
    }

    p {
      width: 90%;
      /* border: 1px solid green; */
      text-align: center;
      font-size: 0.9rem;
    }
  }

  .project {
    border: 1px solid grey;
    border-radius: 10px;
    height: 300px;
    width: 400px;
    text-align: center;
    overflow: hidden;
  }

  .project-desc {
    /* border: 1px solid blue; */
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
  }
`;
