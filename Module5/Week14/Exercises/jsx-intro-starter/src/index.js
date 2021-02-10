import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function App() {
  return (
    <div>
      <h1>My Ugly React App</h1>
      <h2>Ugliest Website Ever</h2>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
