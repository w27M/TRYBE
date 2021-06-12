import React from 'react';
import Provider from './context/Provider';
import Routes from './routes';
import './css/styles.css';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
