import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

const Root = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
