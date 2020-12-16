import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-break: break-word;
}

*{
    word-break: break-all;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

code{
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;

export const Container = styled('div')`
  max-width: 1200px;
  padding: 0px 10px 0px 10px;
  display: block;
  margin: auto;
`;
