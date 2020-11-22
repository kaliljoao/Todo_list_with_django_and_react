import React from 'react';

import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <AppProvider>
        <Routes/>
      </AppProvider>

      <GlobalStyles/>
    </>
  );
}

export default App;
