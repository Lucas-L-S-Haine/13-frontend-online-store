import React from 'react';
import PropTypes from 'prop-types';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { attributes: [] },
    };
  }

  componentDidMount() {
    this.returnProductDetails();
  }

  addProduct({ target }) {
    const { product } = localStorage;
    const list = JSON.parse(product);

    localStorage.setItem('product', JSON.stringify([...list, target.id]));
  }

  async returnProductDetails() {
    const { match: { params: { id } } } = this.props;
    const fetchProductDetails = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const productDetails = await fetchProductDetails.json();
    this.setState({
      product: productDetails,
    });
  }

  render() {
    const { product: { id, title, thumbnail, price, attributes } } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <ul>
          {attributes.map((attribute) => (
            <li key={ attribute.id }>
              {attribute.name}
              :
              {attribute.value_name}
            </li>
          ))}
        </ul>
        <button
          type="button"
          id={ id }
          data-testid="product-detail-add-to-cart"
          onClick={ this.addProduct }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
