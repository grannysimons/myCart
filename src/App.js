import React, { Component } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Addproduct from './components/Addproduct/Addproduct';

const products = [
  {name: "producto 1", price: 12, quantity: 0},
  {name: "producto 2", price: 15, quantity: 0},
  {name: "producto 3", price: 3, quantity: 0},
];

class App extends Component {
  state = {
    products,
  }
  handlerIncrement = (keyProduct) => {
    const products = this.state.products;
    products[keyProduct].quantity++;
    this.setState({products});
  };
  handlerDecrement = (keyProduct) => {
    const products = this.state.products;
    if (products[keyProduct].quantity > 0) products[keyProduct].quantity--;
    this.setState({products});
  };
  addProduct = (product) => {
    var products = this.state.products
    products.push(product);
    this.setState(products);
  };
  render() {
    return (
      <div className="App">
        <h1>Shopping cart</h1>
        <Addproduct addproduct = {this.addProduct}></Addproduct>
        <Cart handlerIncrement={this.handlerIncrement} handlerDecrement={this.handlerDecrement} products={this.state.products}></Cart>
      </div>
    );
  }
}

export default App;
