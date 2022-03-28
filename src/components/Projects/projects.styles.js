import styled from "styled-components";

export const Wrapper = styled.div`
  /* border: 1px solid red; */
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid blue; */
  width: 100%;

  .page-info {
    /* border: 1px solid yellow; */
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    /* border: 1px solid blue; */
  }

  a {
    text-decoration: none;
  }

  .underline {
    width: 120px;
    border: 1px solid white;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .go-back {
    text-decoration: none;
    border: 1px solid white;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 50px;
    margin-top: 60px;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    /* border: 1px solid green; */
    row-gap: 2rem;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    width: 90%;

    .img-wrapper {
      height: 65%;
      position: relative;
      overflow: hidden;
      /* border: 1px solid red; */

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
      /* border: 1px solid green; */
      text-align: center;
      font-size: 0.9rem;
    }
  }

  .project {
    border: 1px solid grey;
    border-radius: 10px;
    height: 370px;
    width: 400px;
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
    overflow: hidden;

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

  @media screen and (min-width: 800px) {
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

    /* .img-wrapper > a:hover {
      color: red;
    } */

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
