import React, {Component} from 'react';
import "./Addproduct.css";

export default class Addproduct extends Component{
  render(){
    return(<div className="addproduct">
      <input type="text" placeholder="name" ref={(input) => this.inputname = input}/>
      <input type="text" placeholder="price" ref={(input) => this.inputprice = input}/>
      <button onClick={ () => { this.props.addproduct({name: this.inputname.value, price: this.inputprice.value, quantity: 0}) }}>Add product</button>
    </div>);
  }
}