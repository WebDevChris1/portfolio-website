import styled from "styled-components";

export const Spinner = styled.div`
  border: 1px solid white;
  border-top: 1px solid black;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  animation: spin 0.8s linear infinite;
  /* margin: 20px auto; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
