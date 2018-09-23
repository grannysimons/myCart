import React, { Component } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Addproduct from './components/Addproduct/Addproduct';

class App extends Component {
  addProduct = (name, price) => {
    console.log("add product in app: ",name,', ',price);
    // return <
  }
  render() {
    return (
      <div className="App">
        <Addproduct addproduct={this.addProduct}></Addproduct>
        <Cart></Cart>
      </div>
    );
  }
}

export default App;
