import styled from "styled-components";

export const Title = styled.h2`
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;

  @media screen and (min-width: 850px) {
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9rem;
  }
`;
