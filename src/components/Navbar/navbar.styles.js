import styled from "styled-components";

export const Wrapper = styled.nav`
  padding: 1.2rem;
  width: 100vw;
  /* margin-bottom: 10px; */
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid yellow; */

  h1 {
    font-size: 1.7rem;
    margin: 0;
  }

  .nav-links {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 30px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 300;
    font-size: 0.9rem;
  }

  .nav-social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.1rem;

    .social-icon {
      font-size: 1rem;
    }

    a {
      font-size: 0.9rem;
    }
  }

  .contact {
    border: 1px solid white;
    padding: 0.5rem 1.2rem;
    border-radius: 10px;
    font-size: 1rem;
  }
`;
