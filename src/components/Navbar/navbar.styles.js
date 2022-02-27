import styled from "styled-components";

export const Wrapper = styled.nav`
  /* border: 1px solid red; */
  padding: 1rem;
  width: 100vw;
  /* margin-bottom: 10px; */
  position: fixed;
  background-color: ${(props) => props.bgColor};
  z-index: 100;

  @media screen and (min-width: 800px) {
    padding: 1.2rem;
  }
`;

export const Content = styled.div`
  /* display: flex; */
  /* border: 1px solid red; */

  h1 {
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 300;
    font-size: 0.9rem;
  }

  ul {
    list-style-type: none;
  }

  .nav-header {
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
  }

  .links-wrapper {
    overflow: hidden;
    /* border: 1px solid red; */
    z-index: 10px;
    height: 0;
  }

  .links {
    /* border: 1px solid red; */
  }

  .nav-social {
    /* display: none; */
    ul {
      display: flex;
    }
  }

  .nav-social > a {
    /* display: none; */
  }

  .nav-toggle {
    background-color: transparent;
    border: none;
    font-size: 2rem;
  }

  .nav-toggle:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: baseline;
    height: 5vh;
    /* border: 1px solid yellow; */

    ul {
      display: flex;
      gap: 30px;
    }

    li {
      list-style: none;
    }

    .nav-toggle {
      display: none;
    }

    .nav-header {
      /* border: 1px solid blue; */
      align-items: baseline;
    }

    .links-wrapper {
      border: 1px solid red;
      height: 100%;
      overflow: visible;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .links {
      border: 1px solid red;
      display: flex;
      gap: 30;
      padding-left: 20px;
      height: 5vh;
    }

    .nav-social {
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 1.1rem;
      margin-left: auto;

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
  }

  /* @media screen and (max-width: 850px) {
    a {
      color: red;
    }
  } */
`;
