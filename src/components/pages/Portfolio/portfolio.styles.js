import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  padding: 0 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  br {
    display: none;
  }

  h3 {
    font-size: 1.7rem;
    color: white;
  }

  .projects-wrapper {
    display: flex;
    flex-direction: column;
  }

  .title-wrapper {
    display: flex;
    align-items: baseline;
    margin-bottom: 15px;
    gap: 5px;
  }

  .title-wrapper > a {
    text-decoration: none;
  }

  @media screen and (min-width: 850px) {
    h3 {
      font-size: 2rem;
    }
    br {
      display: none;
    }

    .projects-wrapper {
      width: 100%;
    }
  }
`;
