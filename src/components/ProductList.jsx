import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products, searchText, onUpdateCount } = this.props;

    if (products.length === 0 && searchText === '') {
      return <span>Nenhum produto foi encontrado</span>;
    }

    return (
      <div>
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            onUpdateCount={ onUpdateCount }
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.string,
  onUpdateCount: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  searchText: undefined,
};

export default ProductList;
