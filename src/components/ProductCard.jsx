import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h4>{product.title}</h4>
        <img src={ product.thumbnail } alt="Imagem" />
        <p>{product.price}</p>
        <Link data-testid="product-detail-link" to={ `/product/${product.id}` }>
          Ver detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(String).isRequired,
};

export default ProductCard;
