import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: #030619;
  }

  input, span, strong,
  small, button, h1,h2,h3,h4,h5,h6, a {
    font-family: Roboto, sans-serif;  }

`;
