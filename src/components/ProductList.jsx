import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  addProduct({ target }) {
    const { product } = localStorage;
    const list = JSON.parse(product);

    const item = {
      id: target.id,
      count: 1,
    };

    if (!list.find(({ id }) => id === item.id)) {
      localStorage.setItem('product', JSON.stringify([...list, item]));
    } else {
      localStorage.setItem('product', JSON.stringify(
        list.map((objct) => {
          if (objct.id === item.id) {
            objct.count += 1;
          }
          return objct;
        }),
      ));
    }
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
