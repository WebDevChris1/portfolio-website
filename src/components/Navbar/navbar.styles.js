import styled from "styled-components";

export const Wrapper = styled.nav`
  /* border: 1px solid red; */
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 5vh;
`;
export const Content = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: relative;

  h1 {
    font-size: 2rem;
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
    width: 100%;
    justify-content: space-between;
    padding: 10px;
    z-index: 50;
    background-color: black;
  }

  .links-wrapper {
    position: relative;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    background-color: black;
    /* border: 1px solid green; */
    padding: 10px;
    height: 250px;
    width: 100%;
    transition: top 1s ease-in-out;
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
`;

// export const Wrapper = styled.nav`
//   /* border: 1px solid red; */
//   padding: 1rem;
//   width: 100vw;
//   /* margin-bottom: 10px; */
//   position: fixed;
//   background-color: ${(props) => props.bgColor};
//   z-index: 100;

//   @media screen and (min-width: 800px) {
//     padding: 1.2rem;
//   }
// `;

// export const Content = styled.div`
//   /* display: flex; */
//   /* border: 1px solid red; */
//   /* height: 100vh; */

//   h1 {
//     font-size: 2rem;
//   }

//   a {
//     text-decoration: none;
//     color: white;
//     font-weight: 300;
//     font-size: 0.9rem;
//   }

//   ul {
//     list-style-type: none;
//   }

//   .nav-header {
//     display: flex;
//     /* width: 100%; */
//     justify-content: space-between;
//   }

//   .links-wrapper {
//     overflow: hidden;
//     /* border: 1px solid red; */
//     z-index: 10px;
//     display: flex;
//     align-items: center;
//     /* justify-content: space-around; */
//   }

//   .links {
//     /* border: 1px solid red; */
//   }

//   .links li {
//     padding: 5px 0;
//   }

//   .nav-social {
//     /* border: 1px solid red; */
//     overflow: hidden;
//     display: flex;
//     flex-direction: column-reverse;
//     /* align-items: center; */
//     /* align-items: center; */
//     /* justify-content: center; */
//     ul {
//       display: flex;

//       li {
//         padding: 0 10px;
//         padding-left: 0;

//         a {
//           padding-top: 5px;
//         }
//       }
//     }

//     /* a{
//       padding: 10px 0s;
//     } */
//   }

//   .nav-toggle {
//     background-color: transparent;
//     border: none;
//     font-size: 2rem;
//   }

//   .contact {
//     /* align-self: flex-start; */
//     /* border: 1px solid red; */
//     width: 55px;
//     padding: 5px 0;
//   }

//   .nav-toggle:hover {
//     cursor: pointer;
//   }

//   @media screen and (min-width: 800px) {
//     display: flex;
//     flex-direction: row;
//     /* justify-content: space-between; */
//     align-items: baseline;
//     height: 5vh;
//     /* border: 1px solid yellow; */

//     ul {
//       display: flex;
//       gap: 30px;
//     }

//     li {
//       list-style: none;
//     }

//     .nav-toggle {
//       display: none;
//     }

//     .nav-header {
//       /* border: 1px solid blue; */
//       align-items: baseline;
//     }

//     .links-wrapper {
//       /* border: 1px solid red; */
//       height: 100%;
//       overflow: visible;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }

//     .links {
//       /* border: 1px solid red; */
//       display: flex;
//       gap: 30;
//       padding-left: 20px;
//       height: 5vh;
//     }

//     .nav-social {
//       /* border: 1px solid red; */
//       overflow: visible;
//       display: flex;
//       flex-direction: row;
//       justify-content: space-between;
//       align-items: flex-end;
//       gap: 1.1rem;
//       margin-left: auto;

//       .social-icon {
//         font-size: 1rem;
//       }

//       a {
//         font-size: 0.9rem;
//       }

//       ul {
//         gap: 1.1rem;
//       }
//     }

//     /* .nav-social > a {
//       display: none;
//     } */

//     .contact {
//       border: 1px solid white;
//       padding: 0.5rem 1.2rem;
//       border-radius: 10px;
//       font-size: 1rem;
//       width: 100%;
//     }
//   }

// `;
