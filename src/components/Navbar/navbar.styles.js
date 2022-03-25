// imports
import styled from "styled-components";

export const Wrapper = styled.nav`
  // component wrapper global styles
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100vw;
  background-color: black;
  height: 8vh;
  padding: 0 5px;
  @media screen and (min-width: 800px) {
    height: 9vh;
  }
`;
export const Content = styled.div`
  // component content global styles

  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  /* general styles */
  h1 {
    font-size: 2rem;
    font-weight: 1000;
  }

  ul {
    list-style-type: none;
    width: 70px;
  }

  li {
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    font-weight: bold;
  }

  button {
    height: 30px;
    font-size: 2rem;
    background-color: transparent;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  /* header */
  .nav-header {
    display: flex;
    width: auto;
    justify-content: space-between;
    background-color: black;
    z-index: 50;
    padding: 10px;
  }

  /* links */
  .links-wrapper {
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 15px 10px 0 10px;
    height: auto;
    width: 100%;
    transition: top 500ms ease-in-out;
    z-index: 10;
  }

  .nav-toggle {
    margin-top: 3px;
  }

  /* contact button */
  .contact-wrapper {
    display: flex;
    flex-direction: column-reverse;
    a {
      margin-bottom: 20px;
    }
  }

  /* social media */
  .social-icons {
    display: flex;
    width: 80px;
    justify-content: space-between;
    a {
      font-size: 1rem;
    }
  }

  /* desktop */
  @media screen and (min-width: 800px) {
    // component wrapper global styles
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;

    * {
      margin: 0;
      padding: 0;
    }

    a {
      font-size: 0.9rem;
    }

    a:hover {
      font-weight: lighter;
    }

    ul {
      display: flex;
    }

    li {
      margin: 0;
    }

    /* header */
    .nav-header {
      align-items: flex-end;
      justify-content: center;
      padding: 0;
    }

    /* links */
    .links-wrapper {
      border: none;
      position: static;
      flex-direction: row;
      align-items: flex-end;
      padding: 0;
      padding-bottom: 7px;
    }

    .links a {
      padding-left: 25px;
    }

    .nav-toggle {
      display: none;
    }

    /* contact */
    .contact-wrapper {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      a {
        margin-bottom: 0;
      }
    }

    .contact {
      border: 1px solid white;
      padding: 0.5rem 1.2rem;
      border-radius: 10px;
      font-size: 1rem;
      margin-left: 10px;
      background-color: transparent;
    }

    /* social media */
    .social-icons {
      width: 100px;
      justify-content: center;
      align-items: flex-end;
      border: none;
      a {
        margin: 0;
        padding: 10px;
      }
    }
  }
`;
