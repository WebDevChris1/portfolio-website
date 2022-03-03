import styled from "styled-components";

export const Wrapper = styled.div`
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
    font-size: 4.5vh;
  }

  h3 {
    font-weight: 600;
    font-size: 2.5vh;
  }

  br {
    display: none;
  }

  p {
    border-top: 1px solid white;
    margin-top: 10px;
    padding-top: 10px;
  }

  @media screen and (min-width: 800px) {
    /* border: 1px solid green; */
    width: 100vw;
    align-self: flex-end;
    padding-bottom: 20px;

    h2 {
      font-size: 9vw;
      text-align: right;
      /* border: 1px solid yellow; */
      align-self: flex-end;
      width: 50%;
    }

    br {
      display: inline;
    }

    h3 {
      margin: 0;
      font-size: 2rem;
      text-align: right;
      /* border: 1px solid yellow; */
    }

    p {
      text-align: right;
      margin-top: 10px;
      /* border: 1px solid yellow; */
    }

    .header-wrapper {
      height: 100%;
      width: 100%;
      /* border: 1px solid blue; */
      display: flex;
      justify-content: space-between;
    }
    .img-wrapper {
      position: relative;
      width: 35vw;
      height: 35vw;
      overflow: hidden;
      border-radius: 50%;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Image = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 50%;
  margin: 0 auto;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
