import styled from "styled-components";

export const Wrapper = styled.div`
  /* border: 1px solid red; */
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 1.2rem;
  padding-bottom: 1rem;
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

  .bg:hover {
    cursor: pointer;
  }
  .one {
    background-color: #d22b2b; // red
  }

  .two {
    background-color: #1034a6; // blue
  }

  .three {
    background-color: #00563b; // green
  }

  .four {
    background-color: #ffc72c; // yellow
  }

  .five {
    background-color: black; // black
  }
`;
