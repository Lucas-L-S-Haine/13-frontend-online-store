import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProductLocal();
  }

  getProductLocal() {
    const { product } = localStorage;
    const productList = JSON.parse(product);

    productList.map(async (id) => {
      const fetchProductDetails = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const productDetails = await fetchProductDetails.json();

      this.setState((prevState) => (
        { products: [...prevState.products, productDetails] }));
    });
  }

  render() {
    const { products } = this.state;

    if (products.length < 1) {
      return (
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    }

    return (
      <div>
        <span data-testid="shopping-cart-product-quantity">{ products.length }</span>
        { products.map(({ id, title, thumbnail, price }) => (
          <div key={ id }>
            <h1 data-testid="shopping-cart-product-name">{ title }</h1>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        )) }
      </div>
    );
  }
}

export default Cart;
