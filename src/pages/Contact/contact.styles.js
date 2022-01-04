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

  select {
    background-color: transparent;
    padding: 5px;
    outline: none;
    border: 1px solid white;
    border-radius: 5px;
    /* text-align: center; */
  }

  textarea {
    padding: 10px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    outline: none;
    color: white;
    resize: none;
  }

  button {
    background-color: transparent;
    padding: 5px 20px;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 1rem;
  }

  button:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;

export const Label = styled.label`
  margin-right: 10px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 5px 5px;
  width: 250px;
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  border-radius: 5px;
`;
