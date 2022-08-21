import React, { Component } from "react";
import Child1 from "./state-child";

var flex = {
  display: "flex",
  justifyContent: "space-around"
};

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
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
      cartItem : []

    };
  }
  render() {
    // this.setState() = {title : 'Mani'}
    return (
      <div style={flex}>
        {this.state.products.map(data => (
          <Child1 name={data.name} pic={data.img} details={data.about} />
        ))}
      </div>
    );
  }
}

export default Parent;
