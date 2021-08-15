import React, { Component } from 'react';

class InfoCart extends Component {
  constructor() {
    super();

    this.state = {
      countTotal: 0,
    };
  }

  componentDidMount() {
    this.getCount();
  }

  getCount() {
    const product = localStorage.getItem('product');
    const list = JSON.parse(product);
    this.setState({
      countTotal: list.reduce((acc, { count }) => {
        acc += count;
        return acc;
      }, 0) });
  }

  render() {
    const { countTotal } = this.state;
    return (
      <span data-testid="shopping-cart-size">
        { countTotal }
      </span>
    );
  }
}

export default InfoCart;
