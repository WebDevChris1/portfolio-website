import styled from "styled-components";

export const Wrapper = styled.main`
  /* border: 1px solid red; */
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Content = styled.div`
  /* border: 1px solid blue; */
  height: 600px;
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    height: 100%;
    width: 50%;
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    text-align: center;
  }
`;

export const Form = styled.form`
  /* border: 1px solid green; */
  height: 85%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

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
    width: 60px;
  }

  button:hover {
    cursor: pointer;
  }

  .input-container {
    /* border: 1px solid red; */
    gap: 10px;
    display: flex;
    justify-content: space-between;
  }

  .small-input {
    width: 120px;
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
