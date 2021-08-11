/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import {
  getProductsFromCategory,
  getProductsFromCategoryAndQuery,
  getProductsFromQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import SearchField from './SearchField';
import ProductList from './ProductList';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      categoryId: '',
      products: [],
    };

    this.onSearchText = this.onSearchText.bind(this);
    this.onCategoryId = this.onCategoryId.bind(this);
    this.getCategoriesList = this.getCategoriesList.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  onSearchText(searchText) {
    this.setState({ searchText });
    this.getCategoriesList();
  }

  onCategoryId(categoryId) {
    this.setState({ categoryId });
    this.getCategoriesList();
  }

  async getCategoriesList() {
    const { categoryId, searchText } = this.state;
    const product = await getProductsFromCategoryAndQuery(categoryId, searchText);
    this.setState({ products: product.results });
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
          <span><BiCartAlt size={ 40 } /></span>
        </Link>
        <SearchField onSearchText={ this.onSearchText } />
        { this.renderProducts() }
      </div>
    );
  }
}
