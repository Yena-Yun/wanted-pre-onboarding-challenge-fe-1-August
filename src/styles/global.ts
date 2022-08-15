import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(238,174,202);
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(236,175,204,1) 19%, rgba(206,228,255,1) 100%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    background: none;
    cursor: pointer;
  }

  nav ul {
    display: flex;
    background-color: blanchedalmond;
    margin-block-start: 0;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  nav ul li {
    list-style: none;
    margin-right: 16px;
  }
`;
