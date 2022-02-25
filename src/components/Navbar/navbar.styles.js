import styled from "styled-components";

export const Wrapper = styled.nav`
  /* border: 1px solid red; */
  padding: 1.2rem;
  width: 100vw;
  /* margin-bottom: 10px; */
  position: fixed;
  background-color: ${(props) => props.bgColor};
  z-index: 1;
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

  ul {
    display: flex;
    align-items: baseline;
    gap: 30px;
  }

  .nav-links {
    display: flex;
    align-items: baseline;
    gap: 30px;
  }

  li {
    list-style: none;
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
    align-items: flex-end;
    gap: 1.1rem;

    .social-icon {
      font-size: 1rem;
    }

    a {
      font-size: 0.9rem;
    }

    ul {
      gap: 1.1rem;
    }
  }

  .contact {
    border: 1px solid white;
    padding: 0.5rem 1.2rem;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media screen and (max-width: 850px) {
    a {
      color: red;
    }
  }
`;
