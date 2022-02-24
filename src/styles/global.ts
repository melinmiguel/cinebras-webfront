import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;

  }

  /* body {
    font-size: 14px;
    color: ${theme.textTitle};
    background: ${theme.background};
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0
  } */

  button {
    cursor: pointer;
  }

  body, input, button {
    font-family: "Roboto";
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
  };

  a {
    text-decoration: none;
  }

  table {

    display: table;
    border: none;
    border-collapse: collapse;
    border-spacing: 0px;
    table-layout: auto;
    width: 100%;

    thead {

      tr {
        border-bottom: 2px solid ${theme.lightGrey2}
      }

      th {
        text-align: left;
        padding-bottom: 22px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
        color: ${theme.textTitle};
        padding: 24px 16px;
        vertical-align: bottom;

      }
    }

    tbody {

      tr {
        border-bottom: 1px solid ${theme.lightGrey2};
        height: 77px;
        padding: 0 16px;

      }

      td {
        font-weight:  300;
        padding: 24px 16px;
      }
    }

  }


`;
export default GlobalStyle;
