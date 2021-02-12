import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import CoffeeProvider from './context/CoffeeContext';
import SelectedCoffeeBean from './components/SelectedCoffeeBean'

const Root = () => {
  return (
    <CoffeeProvider>
      <SelectedCoffeeBean>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SelectedCoffeeBean>
    </CoffeeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
