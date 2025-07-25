import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    
    fetch('https://my-fullstack-app-qq1y.onrender.com/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error('Error fetching message:', err);
        setMessage('Error connecting to backend.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
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
// trigger build
// retry deploy
