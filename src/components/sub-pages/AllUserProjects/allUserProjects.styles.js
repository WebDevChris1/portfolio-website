import styled from "styled-components";

export const Wrapper = styled.main`
  padding: 0 15px;
`;
export const Content = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 3rem;
    height: 25vh;
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

    .projects-wrapper {
      border: 1px solid red;
    }
  }

  @media screen and (min-width: 850px) {
    h2 {
      font-size: 5rem;
      height: 30vh;
    }
    .projects-wrapper {
      width: 100%;
    }
  }
`;
