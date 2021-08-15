import React, { Component } from 'react';

class CheckoutProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProductLocal();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  async getProductLocal() {
    const products = await localStorage.getItem('product');
    const productsCart = JSON.parse(products);

    this.setState((prevState) => (
      { products: [...prevState.products, ...productsCart] }));
  }

  render() {
    return (
      <div>
        oi
      </div>
    );
  }
}

export default CheckoutProducts;
