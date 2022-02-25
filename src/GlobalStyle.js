import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');


:root{

}

*{
box-sizing:border-box;
font-family: 'Roboto', sans-serif;
color: #ffffff;
margin: 0;
padding: 0;

}

body{
  font-weight: lighter;
  background-color: black;
}

p{
    line-height: 1.5rem;
}
`;
