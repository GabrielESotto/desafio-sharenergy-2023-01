import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    background: rgb(191,254,198);
    background: radial-gradient(circle, rgba(191,254,198,1) 0%, rgba(83,200,148,1) 25%, rgba(197,228,184,1) 50%, rgba(185,245,184,1) 77%, rgba(245,252,168,1) 100%);
  }
`
