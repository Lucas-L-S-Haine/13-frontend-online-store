import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, addProduct } = this.props;
    return (
      <div data-testid="product">
        <h4>{product.title}</h4>
        <img src={ product.thumbnail } alt="Imagem" />
        <p>{product.price}</p>
        <Link data-testid="product-detail-link" to={ `/product/${product.id}` }>
          Ver detalhes
        </Link>
        <button
          type="button"
          id={ product.id }
          data-testid="product-add-to-cart"
          onClick={ addProduct }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(String).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ProductCard;
