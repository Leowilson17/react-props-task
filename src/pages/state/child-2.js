import React, { Component } from "react";
var cart = {
    border : '2px solid black',
    bakcgroundColor : 'pink',
    textAlign : 'center'
  }
class Child2 extends Component{
    render(){
      return(
          <div style = {cart}>{this.props.value}
        </div>
        )}
  
 }
 export default Child2;