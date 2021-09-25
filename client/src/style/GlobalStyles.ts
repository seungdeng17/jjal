import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {}
  body {
    margin: 0 auto;
    max-width: 1000px;
    background-color: #2F3640;
  }
  body, button, input, textarea {
    font-family: 'Noto Sans KR', sans-serif;
    color: #222;
  }
  #root {
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
  }
`;

export default GlobalStyles;
