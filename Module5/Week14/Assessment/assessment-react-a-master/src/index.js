import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import PhotoProvider from './context/PhotoContext';

const Root = () => {
  return (
    <PhotoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PhotoProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
