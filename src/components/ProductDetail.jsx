import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { attributes: [] },
    };

    this.returnProductDetails = this.returnProductDetails.bind(this);
  }

  componentDidMount() {
    this.returnProductDetails();
  }

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

  async returnProductDetails() {
    const { match: { params: { id } } } = this.props;
    const productsList = await localStorage.getItem('productsList');
    const listGet = JSON.parse(productsList);

    this.setState({
      product: listGet.filter((objct) => (objct.id === id))[0],
    });
  }

  render() {
    const { product: { id, title, thumbnail, price, attributes } } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <span>
            <BiCartAlt size={ 40 } />
          </span>
        </Link>
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
