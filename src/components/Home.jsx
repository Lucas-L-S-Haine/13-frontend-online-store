/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import SearchField from './SearchField';
import ProductList from './ProductList';

export default class Home extends React.Component {
<<<<<<< HEAD

=======
>>>>>>> cf569437983527e7f7f90793f9bd42027f031e62
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      fieldText:
    }
  }

  onHandleClickc() {

    this.setState({
      products: products.results,
    });
  }

  async handleClick() {
    const { searchField } = this.state;
    console.log(searchField);
    const products = await getProductsFromCategoryAndQuery('MLB1196', searchField);

=======
      searchText: undefined,
      categoryId: undefined,
      products: [],
    };

    this.onSearchText = this.onSearchText.bind(this);
    this.onCategoryId = this.onCategoryId.bind(this);
    this.getProductsList = this.getProductsList.bind(this);
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
>>>>>>> cf569437983527e7f7f90793f9bd42027f031e62
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <CategoriesList onChangeField={  } />

=======
        <CategoriesList onCategoryId={ this.onCategoryId } />
>>>>>>> cf569437983527e7f7f90793f9bd42027f031e62
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <Link data-testid="shopping-cart-button" to="/cart">
          <span>
            <BiCartAlt size={ 40 } />
          </span>
        </Link>
<<<<<<< HEAD

        <SearchField products={ products }/>

        <ProductsList products={ products }/>
=======
        <SearchField onSearchText={ this.onSearchText } />
        {this.renderProducts()}
>>>>>>> cf569437983527e7f7f90793f9bd42027f031e62
      </div>
    );
  }
}
