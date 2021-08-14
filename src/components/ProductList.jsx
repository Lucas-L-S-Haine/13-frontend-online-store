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
      evaluation: { comment: '' },
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
    const { products, searchText } = this.props;

    if (products.length === 0 && searchText === '') {
      return <span>Nenhum produto foi encontrado</span>;
    }

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
  searchText: PropTypes.string,
};

ProductList.defaultProps = {
  searchText: undefined,
};

export default ProductList;
