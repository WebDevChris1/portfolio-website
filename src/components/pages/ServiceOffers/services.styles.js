import styled from "styled-components";

export const Wrapper = styled.main`
  border: 1px solid red;
`;

export const Content = styled.div`
  border: 1px solid blue;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  ul {
    width: 100%;
    height: 150px;
    padding-left: 60px;
    /* border: 1px solid red; */
    list-style-type: square;
  }

  li {
    line-height: 1.5rem;
  }

  .page-info {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h2 {
      font-size: 2rem;
    }

    .underline {
      width: 80px;
      height: 1px;
      border: 2px solid white;
      border-radius: 20px;
      margin: 5px 0;
    }

    p {
      text-align: center;
    }
  }

  .tier-options {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    justify-items: center;
    width: 100%;
    gap: 2rem;
  }

  .tier {
    border: 1px solid white;
    border-radius: 10px;
    height: 450px;
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    position: relative;
    overflow: hidden;
  }

  .icon {
    font-size: 5rem;
    margin-top: 3rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .price {
    font-size: 1.3rem;
    text-align: center;
    position: absolute;
    /* right: -30px;
    top: -30px; */
    padding: 1px 20px;

    top: 0;
    right: 0;
    background-color: white;
    color: black;
    /* transform: rotate(40deg); */
    /* padding: 20px; */
  }

  .delivery-revision {
    display: flex;
    width: 100%;
    height: 60px;
    /* border: 1px solid blue; */
    align-items: center;
    justify-content: center;
    gap: 5px;

    .cycle-icon {
      font-size: 1.3rem;
      margin-left: 35px;
    }

    .clock-icon {
      font-size: 1.3rem;
    }

    span {
      font-size: 1.1rem;
      font-weight: normal;
      /* border: 1px solid yellow; */
    }
  }

  a {
    text-decoration: none;
    border: 1px solid white;
    border-radius: 10px;
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    font-weight: 500;
    margin: 20px 0;
  }
`;

// export const Wrapper = styled.main`
//   border: 1px solid red;
//   height: 100vh;
//   width: 100vw;
// `;
// export const Content = styled.div`
//   /* border: 1px solid blue; */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100%;

//   .page-info {
//     /* border: 1px solid red; */
//     width: 70%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height: 150px;
//     text-align: center;

//     h2 {
//       font-size: 2rem;
//     }

//     .underline {
//       width: 80px;
//       height: 1px;
//       border: 2px solid white;
//       border-radius: 20px;
//       margin: 5px 0;
//     }

//     p {
//       margin-top: 10px;
//       align-self: baseline;
//     }
//   }

//   .tier-options {
//     border: 1px solid green;
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
//     width: 100%;
//     justify-items: center;
//     gap: 2rem;
//   }

//   .tier {
//     border: 1px solid blue;
//     height: 400px;
//     width: 350px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     border-radius: 10px;

//     .icon {
//       font-size: 4rem;
//     }

//     h3 {
//       font-size: 1.5rem;
//     }

//     .delivery-revision {
//       display: flex;
//       width: 100%;
//       height: 60px;
//       /* border: 1px solid blue; */
//       align-items: center;
//       justify-content: center;
//       gap: 5px;

//       .cycle-icon {
//         font-size: 1.2rem;
//         margin-left: 35px;
//       }

//       .clock-icon {
//         font-size: 1.2rem;
//       }

//       span {
//         font-size: 1.1rem;
//         font-weight: normal;
//       }
//     }

//     ul {
//       width: 100%;
//       height: 150px;
//       padding-left: 60px;
//       /* border: 1px solid red; */
//       list-style-type: square;
//     }
//     li {
//       line-height: 20px;
//     }

//     .price {
//       font-weight: normal;
//       font-size: 1.5rem;
//     }
//   }

//   a {
//     padding: 10px;
//     border: 1px solid white;
//     border-radius: 5px;
//     text-decoration: none;
//   }
// `;
