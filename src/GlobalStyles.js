import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

:root {
  --white: #FBFEF9;
  --black: #191923;
  --blue: #0E79B2;
  --red: #BF1363;
  --orange: #F39237;

}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: var(--white);
    color: var(--black);
}
  
    
   



  body {
    flex-direction: column;
    font-family: Roboto, sans-serif;


  }
`

export default GlobalStyle
