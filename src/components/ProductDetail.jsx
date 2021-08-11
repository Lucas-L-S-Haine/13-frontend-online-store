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

  async returnProductDetails() {
    const { match: { params: { id } } } = this.props;
    const fetchProductDetails = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const productDetails = await fetchProductDetails.json();
    this.setState({
      product: productDetails,
    });
  }

  render() {
    const { product: { title, thumbnail, price, attributes } } = this.state;
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
