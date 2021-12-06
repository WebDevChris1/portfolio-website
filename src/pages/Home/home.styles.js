import styled from "styled-components";

export const Wrapper = styled.div`
  height: 85vh;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 50px;
  gap: 10%;
`;

export const Content = styled.div`
  /* border: 1px solid green; */
  width: 50%;
  display: flex;
  flex-direction: column;
  font-weight: lighter;
  margin-right: 10px;

  h2 {
    font-size: 7rem;
    margin: 0;
    text-align: right;
  }

  h3 {
    margin: 0;
    font-size: 2rem;
    text-align: right;
  }

  p {
    line-height: 1.5rem;
    text-align: right;
  }
`;

export const Image = styled.img`
  /* border: 5px solid white; */
  width: 450px;
  height: 450px;
  border-radius: 50%;
`;
