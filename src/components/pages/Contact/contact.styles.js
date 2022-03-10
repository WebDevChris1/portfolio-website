import styled from "styled-components";

export const Wrapper = styled.main`
  /* border: 1px solid blue; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 800px) {
    /* border: 1px solid red; */
    justify-content: center;
  }
`;

export const Content = styled.div`
  /* border: 1px solid red; */
  height: 600px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  /* align-self: flex-end; */

  h2 {
    font-size: 3rem;
    text-align: center;
    border-bottom: 2px solid white;
    width: 85%;
  }

  @media screen and (min-width: 800px) {
    /* border: 1px solid blue; */
    height: 600px;
    width: 1100px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      height: 100%;
      width: 50%;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 6rem;
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  width: 60%;

  label {
    margin-right: 10px;
    font-weight: 500;
  }

  select {
    width: 75px;
    color: black;
    padding: 5px;
    outline: none;
    border: 1px solid white;
    border-radius: 5px;
  }

  button {
    background-color: transparent;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 700;
  }

  button:hover {
    cursor: pointer;
  }

  .input-container {
    display: flex;
    gap: 10px;
  }

  .small-input {
    width: 120px;
  }

  @media screen and (min-width: 800px) {
    /* border: 1px solid green; */
    width: 50%;

    .input-container {
      /* border: 1px solid green; */
      flex-direction: row;
    }
  }
`;

export const Input = styled.input`
  padding: 5px;
  width: 250px;
  height: 40px;
  border: 1px solid white;
  outline: none;
  border-radius: 5px;
  color: black;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
  outline: none;
  color: white;
  resize: none;
  color: black;
`;
