import React, { Component } from "react";
import "./state.css";
import Child1 from "./child-1"
import Child2 from "./child-2"

var flex = {
  display: "flex",
  justifyContent: "space-around"
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
 cartItems(value) {
   console.log('value',value)
  //  this.setState({cartItem : [value]})
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
            property = {data}
            cart = {this.cartItems}
          />
        ))}
      </div>
      <h2>Child-2</h2>
      <div>
        {this.state.cartItem.map((details,index)=>
            <Child2  key = {index} value = {details.name}/>
          )}
      </div>
      </div>
    );
  }
}
export default Parent;





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
