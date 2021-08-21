/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
import React from "react";
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widgets from './Widgets'

function App() {
  return (
    <div className="app">
      
      {/* Sidebar */}
      <Sidebar />
      {/*Feed*/}
      <Feed/>
      {/*Widgets*/}
      <Widgets/>
      
     
    </div>
  );
}

export default App