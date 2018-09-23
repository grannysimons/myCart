import React, {Component} from 'react';

export default class Addproduct extends Component{
  render(){
    return(<div>
      <h1>Add product</h1>
      <input type="text" placeholder="name" ref={(input) => this.inputname = input}/>
      <input type="text" placeholder="price" ref={(input) => this.inputprice = input}/>
      <button onClick={ () => { this.props.addproduct(this.inputname.value, this.inputprice.value) }}>Add product</button>
    </div>);
  }
}