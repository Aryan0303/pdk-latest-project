import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { CartProvider } from './CartContext'; // Corrected import
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>,
  document.getElementById('root')
);
