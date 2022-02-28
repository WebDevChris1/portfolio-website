import styled from "styled-components";

export const Wrapper = styled.main`
  height: 95vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s ease-in-out;
`;

export const Content = styled.div`
  /* border: 1px solid blue; */
  text-align: right;

  h2 {
    font-size: 8rem;
  }
  p {
    margin-right: 10px;
  }
`;
