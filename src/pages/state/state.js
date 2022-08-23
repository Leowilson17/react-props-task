import React, { Component } from "react";
import "./state.css";

var flex = {
  display: "flex",
  justifyContent: "space-around"
}
var cart = {
  border : '2px solid black',
  bakcgroundColor : 'pink',
  textAlign : 'center'
}

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title : "",
          name: "Camera",
          img: require("../../assets/images/camera.jpg"),
          about:
            "A camera is an optical instrument that captures a visual image. At a basic level, cameras.",
            qty : 0
        },
        {
          name: "Shoe",
          img: require("../../assets/images/shoe.jpg"),
          about:
            " an outer covering for the human foot typically having a thick or stiff sole with an attached.",
            qty : 0
        },
        {
          name: "Glass",
          img: require("../../assets/images/glass.jpg"),
          about:
            "Glass is an inorganic solid material that is usually transparent or translucent as well as hard.",
            qty : 0
        },
        {
          name: "Headphone",
          img: require("../../assets/images/headphone.jpg"),
          about:
            "Headphones are a pair of small loudspeaker drivers worn on or over-user ears",
            qty : 0
        },
        {
          name: "Watch",
          img: require("../../assets/images/watch.jpg"),
          about:
            "A watch is a portable timepiece intended to be carried or worn by a person,keep a consistent movement",
            qty : 0
        }
      ],
      cartItem: []
    };
  }
  render() {
    // this.setState() = {title : 'Mani'}
    return (
      <div>
      <div style={flex}>
        {this.state.products.map((data, index) => (
          <Child1
            name={data.name}
            pic={data.img}
            details={data.about}
            key={index}
          />
        ))}
      </div>
      <Child2 />
      </div>
    );
  }
}
export default Parent;

var quantity;
class Child1 extends Parent {
  addToCart = () => {
    if(!this.state.cartItem.includes(this)){
    quantity = 1;
    this.state.cartItem.push(this)
    }
    else{
   quantity = quantity + 1;
  //   this.setState = {qty : quantity}
    this.state.cartItem.qty = quantity;
    }
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

class Child2 extends Child1{
  render(){
    return(
        <div style = {cart}>hello
      </div>
      )}
}

// class Testchild extends Component {
//   constructor () {
//     super()
//     this.state = {
//       details : [
//         {
//           name : 'Man'
//         }
//       ]
//   }
//   }
//   render() {
// this.setState = {name : 'Women'}
//     return <div>{this.setState.name}</div>;
//   }
// }
