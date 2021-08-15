import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import CheckoutProducts from './components/CheckoutProducts';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
      <Route exact path="/cart" component={ Cart } />
      <Route
        exact
        path="/product/:id"
        render={ (props) => <ProductDetail { ...props } /> }
      />
      <Route
        exact
        path="/checkout-products"
        render={ (props) => <CheckoutProducts { ...props } /> }
      />
    </Router>
  );
}

export default App;
