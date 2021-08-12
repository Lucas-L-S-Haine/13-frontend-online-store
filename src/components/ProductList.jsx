import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  addProduct({ target }) {
    const { product } = localStorage;
    const list = JSON.parse(product);

    localStorage.setItem('product', JSON.stringify([...list, target.id]));
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
