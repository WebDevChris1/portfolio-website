import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');


:root{

}

*{
box-sizing:border-box;
font-family: 'Roboto', sans-serif;
color: white;

}

body{
  margin: 0;
  padding: 0;
  font-weight: 300;

}

.app-wrapper{
  height: 100vh;
}
`;
