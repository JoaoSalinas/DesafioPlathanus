import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #FFF;
    color: #312e38;
    -webkit-font-smoothing: antialiased;
  }

  box-sizing, input, button {
    font-family: 'Helvetica Neue', Helvetica;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }


`;
