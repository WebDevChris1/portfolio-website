import styled from "styled-components";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
  height: 85vh;
  width: 100vw;
`;
export const Content = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  height: 100%;

  .page-info {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    padding: 0 200px;
    text-align: center;

    h2 {
      margin: 0;
      font-size: 2rem;
    }
  }

  .tier-options {
    /* border: 1px solid green; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
  }

  .tier {
    height: 350px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.75);

    .icon {
      font-size: 4rem;
    }

    ul {
      width: 100%;
    }
  }

  div {
    color: white;
  }

  a {
    padding: 10px;
    border: 1px solid white;
    border-radius: 5px;
    text-decoration: none;
  }
`;
