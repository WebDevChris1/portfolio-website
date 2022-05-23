// imports
import styled from "styled-components";

export const Wrapper = styled.div`
  // component wrapper global styles
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  height: 90vh;

  // desktop
  @media screen and (min-width: 1000px) {
    width: 100vw;
    height: auto;
    flex-direction: row;
  }
`;

export const Content = styled.div`
  // component component global styles
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;

  // general styles
  h2 {
    font-size: 4vh;
    margin-top: 10px;
  }

  h3 {
    font-weight: 600;
    font-size: 2vh;
    margin-top: 5px;
  }

  br {
    display: none;
  }

  p {
    border-top: 1px solid white;
    margin-top: 10px;
    padding-top: 10px;
  }

  .img-wrapper {
    transition: height 500ms ease-in-out;
    transition: width 500ms ease-in-out;
  }

  // desktop
  @media screen and (min-width: 1000px) {
    // content component global styles
    height: 85vh;
    width: 100vw;
    align-self: flex-end;
    gap: 0;

    // general styles
    h2 {
      font-size: 10vw;
      text-align: right;
      align-self: baseline;
      width: 100%;
      margin-top: auto;
    }

    br {
      display: inline;
    }

    h3 {
      margin: 0;
      font-size: 4.5vh;
      text-align: right;
    }

    p {
      margin: 0;
      text-align: right;
      border: none;
    }

    // header
    .header-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    // image
    .img-wrapper {
      position: relative;
      width: 35vw;
      height: 35vw;
      overflow: hidden;
      border-radius: 50%;
      margin: auto auto 30px auto;
      /* opacity: 0.8;s */
    }
  }
`;

export const Image = styled.img`
  // image component global styles
  height: 350px;
  width: 350px;
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;

  // desktop
  @media screen and (min-width: 1000px) {
    /* border: 5px solid red; */
    width: 100%;
    height: 100%;
  }
`;
