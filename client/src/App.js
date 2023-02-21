import logo from './logo.svg';
import { useEffect } from "react";
import './App.css';

function App() {

  useEffect(async() => {
    try {
      const data = await fetch('/');
    } catch(err) {
      console.log(err);
    }
    
  })
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
