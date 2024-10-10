import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: white;
    color: rgb(92, 71, 55);
   
}


  body {
    flex-direction: column;
    font-family: Roboto, sans-serif;


  }
`

export default GlobalStyle
