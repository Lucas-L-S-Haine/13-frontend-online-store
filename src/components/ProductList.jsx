import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidUpdate() {
    const { products } = this.state;
    const setItem = JSON.stringify(products);
    localStorage.setItem('product', setItem);
  }

  addProduct({ target }) {
    this.setState((prevState) => ({ products: [...prevState.products, target.id] }));
  }

  render() {

    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            addProduct={ this.addProduct }
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
