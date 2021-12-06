import styled from "styled-components";

export const Wrapper = styled.div`
  /* border: 1px solid red; */
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 1.2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10%;

  .bg {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 1px solid white;
  }

  .one {
    background-color: red;
  }

  .two {
    background-color: blue;
  }

  .three {
    background-color: green;
  }

  .four {
    background-color: yellow;
  }

  .five {
    background-color: black;
  }
`;
