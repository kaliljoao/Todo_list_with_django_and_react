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
    --primary-darker: #B67411;
    --secondary: #131313;
    --tertiary: #22201E;

    --text-color: #DAE9FF;

    --dashboard-background: #1b1b1b;   
    --gray: #868686;
    --darker-gray: #484848;

    --error: #c53030;
    --tooltip-error: #c54040;

    --priority-1: #A53030;
    --priority-2: #887F29;
    --priority-3: #357387;
  }
`;