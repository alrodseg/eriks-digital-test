import React from 'react'
import Home from './components/pages/Home';
import GlobalStyle from './utils/styles/global';

const App = () => {
    // TODO here either a router or some kind of navigation should be implemented in a real app
    return (
      <>
        <GlobalStyle />
        <Home />
      </>
    );
}

export default App;
