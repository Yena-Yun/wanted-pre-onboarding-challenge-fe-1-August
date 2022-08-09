import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
}

ul,
li {
  list-style: none;
  padding: 0;
  cursor: pointer;
}

input {
  border: none;
  outline: none;
}

input:focus {
  outline: none;
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
