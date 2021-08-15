import React, { Component } from 'react';

class CheckoutProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      amount: 0,
    };

    this.sendTotalAmount = this.sendTotalAmount.bind(this);
  }

  componentDidMount() {
    this.getProductLocal();
  }

  async getProductLocal() {
    const products = await localStorage.getItem('product');
    const productsCart = JSON.parse(products);

    this.setState((prevState) => (
      { products: [...prevState.products, ...productsCart] }));

    this.sendTotalAmount();
  }

  sendTotalAmount() {
    const { products } = this.state;
    this.setState({ amount: products.reduce((acc, { price }) => {
      acc += parseFloat(price);
      return acc;
    }, 0) });
  }

  render() {
    const { products, amount } = this.state;
    const total = `Total: R$ ${amount}`;
    return (
      <div>
        <h2>Revise seus Produtos</h2>
        { products.map(({ id, title, thumbnail, price }) => (
          <div key={ id }>
            <h3>{ title }</h3>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        )) }
        <p style={ { fontWeight: '900' } }>{ total }</p>

        <form>
          <h3>Informações Complementares</h3>
          <input
            id="fullname"
            type="text"
            name="fullname"
            placeholder="Nome Comleto"
            // onChange={this.myChangeHandler}
          />
          <input
            type="text"
            name="cpf"
            placeholder="Nome Comleto"
            // onChange={this.myChangeHandler}
          />
        </form>
      </div>
    );
  }
}

export default CheckoutProducts;
