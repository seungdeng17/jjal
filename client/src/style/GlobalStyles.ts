import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {}
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
