import styled from "styled-components";

export const Wrapper = styled.div`
  height: 95vh;
  /* border: 1px solid blue; */
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const Content = styled.div`
  /* border: 1px solid green; */
  width: 95%;
  /* margin-bottom: 50px; */
  position: absolute;
  bottom: 25px;
  right: 20px;

  h2 {
    font-size: 8rem;
    text-align: right;
  }

  h3 {
    margin: 0;
    font-size: 2rem;
    text-align: right;
  }

  p {
    text-align: right;
    margin-top: 10px;
  }
`;

export const Image = styled.img`
  border: 5px solid white;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  margin-left: 100px;
  margin-bottom: 130px;
`;
