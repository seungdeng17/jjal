import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {}
  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: #222;
  }
  button, input, textarea {
    font-family: 'Noto Sans KR', sans-serif;
    color: #222;
  }
`;

export default GlobalStyles;
