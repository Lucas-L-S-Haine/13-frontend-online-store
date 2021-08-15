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
      totalCount: undefined,
    };

    this.onSearchText = this.onSearchText.bind(this);
    this.onCategoryId = this.onCategoryId.bind(this);
    this.getProductsList = this.getProductsList.bind(this);
    this.onUpdateCount = this.onUpdateCount.bind(this);
  }

  componentDidMount() {
    const products = localStorage.getItem('product');

    if (products === null) {
      localStorage.setItem('product', JSON.stringify([]));
    }
    this.onUpdateCount();
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

  onUpdateCount() {
    const product = localStorage.getItem('product');
    const list = JSON.parse(product);

    this.setState({ totalCount: list.reduce((acc, { count }) => {
      acc += count;
      return acc;
    }, 0) });
  }

  async getProductsList() {
    const { categoryId, searchText } = this.state;
    const product = await getProductsFromCategoryAndQuery(
      categoryId,
      searchText,
    );
    const { results } = product;
    this.setState({ products: results });
    localStorage.setItem('productsList', JSON.stringify(results));
  }

  renderProducts(products) {
    if (products.length <= 0) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
  }

  render() {
    const { products, searchText, totalCount } = this.state;
    return (
      <div>
        <CategoriesList onCategoryId={ this.onCategoryId } />
        {this.renderProducts(products)}
        <Link data-testid="shopping-cart-button" to="/cart">
          <p data-testid="shopping-cart-size">
            { totalCount }
          </p>
          <BiCartAlt size={ 40 } />
        </Link>
        <SearchField onSearchText={ this.onSearchText } />
        <ProductList
          products={ products }
          searchText={ searchText }
          onUpdateCount={ this.onUpdateCount }
        />
      </div>
    );
  }
}
