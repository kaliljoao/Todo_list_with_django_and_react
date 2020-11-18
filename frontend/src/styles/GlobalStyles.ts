import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root{
    height: 100%;
    width: 100vw;

    background-color: var(--secondary);
    color: var(--text-color);
  
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 1.6rem 'Poppins', Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

 :root {
    --primary: #EA9413;
    --secondary: #131313;
    --tertiary: #22201E;

    --dashboard-background: #1b1b1b;   
    --primary-darker: #B67411;
    --text-color: #DAE9FF;
    --gray: #868686;
    --darker-gray: #484848;

    --priority-1: #A53030;
    --priority-2: #887F29;
    --priority-3: #357387;
  }
`;