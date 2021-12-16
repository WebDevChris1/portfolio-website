import styled from "styled-components";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  /* border: 1px solid blue; */
  .hero {
    /* border: 1px solid blue; */
    height: 90vh;
    display: flex;
    h2 {
      /* border: 1px solid red; */
      font-size: 8rem;
      cursor: default;
      align-self: flex-end;
    }
  }

  .about-me {
    padding: 20px;
    height: 85vh;
  }
`;
