import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getListCategories();
  }

  async getListCategories() {
    const categories = await getCategories();
    this.setState({
      products: [...categories],
    });
  }

  render() {
    const { products } = this.state;
    const { onCategoryId } = this.props;
    return (
      <div>
        {products.map((product) => (
          <label data-testid="category" htmlFor={ product.id } key={ product.id }>
            { product.name }
            <input
              id={ product.id }
              type="radio"
              value={ product.id }
              name="categorias"
              onClick={ onCategoryId }
            />
          </label>
        ))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  onCategoryId: PropTypes.func.isRequired,
};
