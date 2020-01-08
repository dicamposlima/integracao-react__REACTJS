import React, { Component } from 'react';
import './App.css';
import Contador from './componentes/Contador';

const App: React.FC = () => {
  return (
    <div className="App">
      <Contador valorInicial={9876} />
      <Contador />
    </div>
  );
}

export default App;
