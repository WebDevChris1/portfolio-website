import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --border-color: #ffffff;
  --font-color: #ffffff;
  --bg-color: #000000;
  --default-line-height: 1.5rem;
  --nav-delay: 600ms;
}
*{
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
color: var(--font-color);
margin: 0;
padding: 0;
}
body{
  background-color: var(--bg-color);
}
p{
    line-height: var(--default-line-height);
}

.paths{
  transition: opacity var(--nav-delay) ease-in-out;
}

`;
