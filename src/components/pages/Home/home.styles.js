import styled from "styled-components";

export const Wrapper = styled.div`
  /* border: 1px solid red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 15px;
  position: absolute;

  @media screen and (min-width: 800px) {
    width: 100vw;
    flex-direction: row;
  }
`;

export const Content = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
  }

  br {
    display: none;
  }

  @media screen and (min-width: 800px) {
    /* border: 1px solid green; */
    width: 100vw;
    align-self: flex-end;
    margin-bottom: 20px;

    h2 {
      font-size: 9vw;
      text-align: right;
    }

    br {
      display: inline;
    }

    h3 {
      margin: 0;
      font-size: 2rem;
      text-align: right;
    }

    p {
      text-align: right;
      margin-top: 10px;
    }
  }
`;

export const Image = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 50%;

  @media screen and (min-width: 800px) {
    /* border: 5px solid white; */
    width: 450px;
    height: 450px;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    margin: 0 50px;
  }
`;
