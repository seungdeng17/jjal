import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  html::-webkit-scrollbar{
    display: none;
  }
  body {}
  body, button, input, textarea {
    font-family: 'Noto Sans KR', sans-serif;
    color: #222;
  }
  #root {
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
  }
  .Toastify__toast-container {
    z-index: 20000;
  }
`;

export default GlobalStyles;
