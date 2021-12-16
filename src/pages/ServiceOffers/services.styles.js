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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .page-info {
    /* border: 1px solid red; */
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    text-align: center;

    h2 {
      font-size: 2rem;
    }

    .underline {
      width: 80px;
      height: 1px;
      border: 2px solid white;
      border-radius: 20px;
      margin: 5px 0;
    }

    p {
      margin-top: 10px;
      align-self: baseline;
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
    height: 400px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.75);

    .icon {
      font-size: 4rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    .delivery-revision {
      display: flex;
      width: 100%;
      height: 60px;
      /* border: 1px solid blue; */
      align-items: center;
      justify-content: center;
      gap: 5px;

      .cycle-icon {
        font-size: 1.2rem;
        margin-left: 35px;
      }

      .clock-icon {
        font-size: 1.2rem;
      }

      span {
        font-size: 1.1rem;
        font-weight: normal;
      }
    }

    ul {
      width: 100%;
      height: 150px;
      padding-left: 60px;
      /* border: 1px solid red; */
      list-style-type: square;
    }
    li {
      line-height: 20px;
    }

    .price {
      font-weight: normal;
      font-size: 1.5rem;
    }
  }

  a {
    padding: 10px;
    border: 1px solid white;
    border-radius: 5px;
    text-decoration: none;
  }
`;
