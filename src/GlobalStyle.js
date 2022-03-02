import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

.paths{
  transition: opacity 1s ease-in-out;
}

`;
