import React, { Component } from "react";
import "./state.css"
class Child1 extends Component {
    render() {
        // console.log(this);
      return (
        <div className = 'product'>
        <img src = {this.props.pic} alt ='Loading'></img>
          <p>{this.props.details}</p>
          <button type = "button">Add to Cart</button>
        </div>
      );
    }
  }
export default Child1;