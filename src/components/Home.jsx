/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import SearchField from './SearchField';
import ProductList from './ProductList';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: undefined,
      categoryId: undefined,
      products: [],
    };

    this.onSearchText = this.onSearchText.bind(this);
    this.onCategoryId = this.onCategoryId.bind(this);
    this.getProductsList = this.getProductsList.bind(this);
  }

  componentDidMount() {
    this.getProductsList();
  }

  onSearchText(searchField) {
    this.setState({ searchText: searchField }, this.getProductsList);
  }

  onCategoryId({ target }) {
    const { value } = target;
    this.setState(
      { categoryId: value, searchText: undefined },
      this.getProductsList,
    );
  }

  async getProductsList() {
    const { categoryId, searchText } = this.state;
    const product = await getProductsFromCategoryAndQuery(
      categoryId,
      searchText,
    );
    const { results } = product;
    this.setState({ products: results });
  }

  async getCategoriesList() {
    const { searchText, categoryId } = this.state;
    const products = await getProductsFromCategoryAndQuery(
      categoryId,
      searchText,
    );
    return products.results;
  }

  renderProducts() {
    const { products } = this.state;

    if (products.length > 0) {
      return <ProductList products={ products } />;
    }

    return <span>Nenhum produto foi encontrado</span>;
  }

  render() {
    return (
      <div>
        <CategoriesList onCategoryId={ this.onCategoryId } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/cart">
          <span>
            <BiCartAlt size={ 40 } />
          </span>
        </Link>
        <SearchField onSearchText={ this.onSearchText } />
        {this.renderProducts()}
      </div>
    );
  }
}
