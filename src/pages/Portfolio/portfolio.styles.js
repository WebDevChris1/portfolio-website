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

    p {
      width: 90%;
      /* border: 1px solid green; */
      text-align: center;
    }

    a {
      text-decoration: none;
      font-size: 1rem;
      border: 1px solid white;
      padding: 1px 15px;
      border-radius: 10px;
    }
  }

  .project {
    border: 1px solid grey;
    border-radius: 10px;
    height: 400px;
    width: 400px;
    text-align: center;
    overflow: hidden;
  }

  .project-desc {
    /* border: 1px solid blue; */
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* padding: 5px; */
  }
`;

export const Image = styled.img`
  overflow: hidden;
  height: 70%;
  width: 100%;
  object-fit: cover;
`;
