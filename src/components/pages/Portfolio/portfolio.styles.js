import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  padding: 0 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* hero */
  .hero {
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 3rem;
    }
  }

  br {
    display: none;
  }

  h3 {
    font-size: 1.7rem;
    color: white;
  }

  .projects-wrapper {
    display: flex;
    flex-direction: column;
  }

  .title-wrapper {
    display: flex;
    align-items: baseline;
    margin-bottom: 15px;
    gap: 5px;
  }

  .title-wrapper > a {
    text-decoration: none;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
    width: 100%;
    .img-wrapper {
      height: 65%;
      position: relative;
      overflow: hidden;
      a {
        position: absolute;
        height: 100%;
        width: 50%;
        text-decoration: none;
        font-size: 3.5rem;
        background-color: rgba(255, 255, 255, 0.2);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0;
      }
    }

    .img-wrapper > img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    p {
      width: 90%;
      text-align: center;
      font-size: 0.9rem;
    }
  }

  .project {
    border: 1px solid grey;
    border-radius: 10px;
    height: 340px;
    width: 390px;
    text-align: center;
    overflow: hidden;
  }

  .project-desc {
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;

    a {
      font-size: 1rem;
      color: white;
      width: 100%;
    }
  }

  .link-wrapper {
    height: 25px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.4);

    a {
      font-size: 1.2rem;
    }
  }

  .view {
    border-right: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media screen and (min-width: 850px) {
    h3 {
      font-size: 2rem;
    }
    .hero {
      height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 9rem;
      }
    }
    br {
      display: none;
    }

    .projects-wrapper {
      width: 100%;
    }

    .project {
      height: 300px;
      width: 400px;
    }

    .link-wrapper {
      display: none;
    }

    .project-desc {
      justify-content: center;
      gap: 10px;
      padding: 0;
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

    .code {
      right: 0;
      top: 0;
      border: none;
    }

    .img-wrapper > img,
    .img-wrapper > a {
      transition: 200ms ease-in-out;
    }

    .project:hover .img-wrapper > .blur {
      filter: blur(5px);
    }

    // slide down animation

    .slide-down {
      transform: translateY(-100%);
    }

    .project:hover > .img-wrapper > .slide-down {
      transform: translateY(0);
    }
  }
`;
