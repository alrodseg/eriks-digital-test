import { createGlobalStyle } from 'styled-components';
import {fontFamily} from './font';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-family: ${fontFamily.sansSerif};
    font-size: 14px;
    line-height: 1.4;
    color: ${colors.black};
  }
  
  body {
    margin: 0;
  }
`;

export default GlobalStyle;
