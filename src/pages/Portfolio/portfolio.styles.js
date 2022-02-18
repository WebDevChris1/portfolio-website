import styled from "styled-components";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hero {
    /* border: 1px solid green; */
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

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* border: 1px solid blue; */
    gap: 2rem;
    margin-bottom: 1rem;

    .img-wrapper {
      height: 70%;
      position: relative;
      overflow: hidden;
      /* border: 1px solid red; */

      a {
        position: absolute;
        inset: 0;
        text-decoration: none;
        font-size: 3rem;
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

    .img-wrapper > a.slide-up {
      transform: translateY(-100%);
    }

    .img-wrapper:hover > a.slide-up {
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
