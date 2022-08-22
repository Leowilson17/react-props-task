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
            "A camera is an optical instrument that captures a visual image. At a basic level, cameras."
        },
        {
          name: "Shoe",
          img: require("../../assets/images/shoe.jpg"),
          about:
            " an outer covering for the human foot typically having a thick or stiff sole with an attached."
        },
        {
          name: "Glass",
          img: require("../../assets/images/glass.jpg"),
          about:
            "Glass is an inorganic solid material that is usually transparent or translucent as well as hard."
        },
        {
          name: "Headphone",
          img: require("../../assets/images/headphone.jpg"),
          about:
            "Headphones are a pair of small loudspeaker drivers worn on or over-user ears"
        },
        {
          name: "Watch",
          img: require("../../assets/images/watch.jpg"),
          about:
            "A watch is a portable timepiece intended to be carried or worn by a person,keep a consistent movement"
        }
      ],
      cartItem: []
    };
  }
  render() {
    // this.setState() = {title : 'Mani'}
    return (
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
    );
  }
}
export default Parent;

// var value
class Child1 extends Parent {
  addToCart = () => {
    if(!this.state.cartItem.includes(this)){
    this.state.cartItem.push(this)
    }
    console.log(this.state.cartItem)
  } 
  render() {
   return (
      <div className="product">
        <img src={this.props.pic} alt="Loading"></img>
        <p>{this.props.details}</p>
        <button onClick={() => this.addToCart()}>Add to Cart</button>
        {this.state.cartItem.map((property,index)=>
          <Child2 key = {index}  box = {property}/>
          )}
      </div>
    );
  }
}

class Child2 extends Child1{
  render(){
    return(
        <div style = {cart}>Hello</div>
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
