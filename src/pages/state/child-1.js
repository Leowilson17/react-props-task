import React, { Component } from "react";
// var quantity;
class Child1 extends Component {
  addToCart = () => {
      this.props.cart(this.props.property)

//     if(!this.state.cartItem.includes(this)){
//         this.state.cartItem.push(this);
//     quantity = 1;
//     }
//     else{
//    quantity = quantity + 1;
//     this.setState = {qty : quantity}
//     // this.state.cartItem.qty = quantity;
//     }
    // console.log(this.state.cartItem)
  } 
  render() {    
   return (
      <div className="product">
        <img src={this.props.pic} alt="Loading"></img>
        <p>{this.props.details}</p>
        <button onClick={() => this.addToCart()}>Add to Cart</button>
      </div>
    );
  }
}
export default Child1;