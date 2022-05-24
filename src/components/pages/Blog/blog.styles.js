import styled from "styled-components";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
  padding: 10px;

  @media screen and (min-width: 800px) {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 5px;

  ul {
    margin-top: 5px;
    list-style-type: none;
  }

  li {
    border-bottom: 1px dotted rgba(255, 255, 255, 0.4);
    width: 100%;
    line-height: 30px;
    font-size: 0.9rem;
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 10px;
    padding: 0.5rem 1.2rem;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 15px;
  }

  button:hover {
    cursor: pointer;
  }

  .grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* border: 1px solid red; */
  }

  .featured {
    grid-area: a;
    border: 1px solid white;
    border-radius: 10px;
    overflow: hidden;
    height: 500px;
    text-align: center;

    p {
      padding: 0 20px;
      font-size: 1rem;
    }

    h3 {
      margin: 10px 0;
    }

    .img-wrapper {
      height: 75%;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
        /* background-position: center; */
        /* background-size: cover; */
      }
    }
  }

  .favorites-wrapper {
    grid-area: b;
    border: 1px solid white;
    border-radius: 10px;
    width: 100%;
    /* height: 150px; */
    padding: 10px;

    h3 {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .all-blogs {
    grid-area: c;
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    /* height: 175px; */

    h3 {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  @media screen and (min-width: 800px) {
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    height: 100%;

    button {
      display: none;
    }

    .grid {
      /* border: 1px solid blue; */
      display: grid;
      /* grid-template-rows: repeat(3, 1fr); */
      /* grid-template-columns: 200px 200px; */
      grid-template-areas:
        "a a a b"
        "a a a c"
        "a a a c";
    }

    .featured {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .all-blogs {
      height: 450px;
      overflow-y: scroll;
    }

    .all-blogs::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
      background-color: rgba(255, 255, 255, 0.1);
    }

    .all-blogs::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
  }
`;

export const Image = styled.img``;
