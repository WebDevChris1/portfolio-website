import styled from "styled-components";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  /* border: 1px solid blue; */
  width: 80%;
  height: 100%;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h2 {
    font-size: 2rem;
  }
`;
