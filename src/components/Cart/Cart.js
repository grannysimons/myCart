import React, {Component} from 'react';
import './Cart.css';

const products = [
  {name: "producto 1", price: 12, quantity: 0},
  {name: "producto 2", price: 15, quantity: 0},
  {name: "producto 3", price: 3, quantity: 0},
];

const styles = {
  prodStyle: {
    padding: "30px 10%",
    borderBottom: "1px solid rgba(100,100,100,0.1)",
  },
  cartStyle: {
    padding: "20px 30%",
  },
  totalStyle: {
    marginTop: "40px",
    fontWeight: "bold"
  }
}
const Product = (props) => {
  return(
    <li className="product row" style={styles.prodStyle}>
      <div className="name col-3">{props.name}</div>
      <div className="price col-3">{props.price} €</div>
      <div className="quantity col-3">{props.quantity}</div>
      <div className="col-2">
        <button onClick={() => {props.increment(props.id)}}>+</button>
        <button onClick={() => {props.decrement(props.id)}}>-</button>
      </div>
    </li>
  );
}

export default class Cart extends Component{
  state = {
    total: 0,
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
  calculateTotal = () => {
    var total = 0;
    this.state.products.forEach(product => {
      total += product.price * product.quantity;
    });
    return total;
  }
  addProduct = () => {
    let products = this.state.products;
    products.push({price: this.props.price, name: this.props.name, quantity: this.props.quantity});
    this.setState(products);
  }
  render() {
    return (
      <ul className="cart" style={styles.cartStyle}>
        {this.state.products.map((product, index) => {
          return (<
            Product 
            name={product.name} 
            price={product.price} 
            quantity={product.quantity}
            increment={this.handlerIncrement}
            decrement={this.handlerDecrement}
            key={index}
            id={index}
          />);
        })}
        <div className="total" style={styles.totalStyle}>total: <span className="totalAmount">{this.calculateTotal()}</span> €</div>
      </ul>
    )
  }
}