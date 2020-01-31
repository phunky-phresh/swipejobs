import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Nav from './components/Nav';
import Body from './components/Body';

function App() {
  return (
    <div className="container">
        <Nav />
        <Body />

    </div>
  );
}

export default App;
