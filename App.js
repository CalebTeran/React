import React from 'react';
import logo from './logo.svg';
import './App.css';
import jxscomponent from './components/jxs.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HOLA MUNDO</h1>
  
      </header>
      <jxscomponent></jxscomponent>
    </div>
  );
}

export default App;
