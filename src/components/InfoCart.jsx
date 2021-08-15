import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoCart extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     countTotal: 0,
  //   };
  // }

  // componentDidMount() {
  //   this.getCount();
  // }

  // getCount() {
  //   const product = localStorage.getItem('product');
  //   const list = JSON.parse(product);
  //   this.setState({
  //     countTotal: list.reduce((acc, { count }) => {
  //       acc += count;
  //       return acc;
  //     }, 0) });
  // }

  render() {
    const { totalCount } = this.props;
    return (
      <span data-testid="shopping-cart-size">
        { totalCount }
      </span>
    );
  }
}

InfoCart.propTypes = {
  totalCount: PropTypes.number,
};

InfoCart.defaultProps = {
  totalCount: undefined,
};

export default InfoCart;
