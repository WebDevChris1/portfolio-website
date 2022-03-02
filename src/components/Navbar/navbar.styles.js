import styled from "styled-components";

export const Wrapper = styled.nav`
  /* border: 1px solid red; */
  position: fixed;
  z-index: 100;
  width: 100vw;
  background-color: black;
  height: 5vh;
`;
export const Content = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  position: relative;
  height: 5vh;

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
  .nav-header {
    display: flex;
    width: auto;
    justify-content: space-between;
    background-color: black;
    z-index: 50;
    padding: 15px;
  }

  .links-wrapper {
    position: relative;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    background-color: black;
    /* border: 1px solid green; */
    padding: 15px 10px;
    height: auto;
    width: 100%;
    transition: top 1s ease-in-out;
    z-index: 10;
  }
  .contact-wrapper {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column-reverse;
    a {
      margin-bottom: 20px;
    }
  }
  .social-icons {
    display: flex;
    width: 80px;
    /* border: 1px solid blue; */
    justify-content: space-between;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    padding: 15px 20px;
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
    .nav-header {
      /* border: 1px solid blue; */
      align-items: flex-end;
      justify-content: center;
      padding: 0;
    }
    .links-wrapper {
      border: none;
      position: static;
      /* border: 1px solid yellow; */
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
    .contact-wrapper {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      /* border: 1px solid green; */
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
    .social-icons {
      /* border: 1px solid blue; */
      width: 100px;
      justify-content: center;
      align-items: flex-end;
      a {
        margin: 0;
        padding: 10px;
      }
    }
  }
`;
