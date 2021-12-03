import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    cursor: none;
}

h1,h2,h3,h4,h5,h6{
    display: inline-block;
    margin: 0;
    padding: 0;
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
`

export default GlobalStyle;