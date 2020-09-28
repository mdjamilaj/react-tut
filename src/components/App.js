import React from 'react';
import './App.css';

import First from './First/First'

function App() {
  let a = '';
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to react app</h1>
        <div className="card">
          <First />
          <First />
          <First />
        </div>
      </header>
      <div>
         { a ? a : 'No data found' }
      </div>
    </div>
  );
}

export default App;
