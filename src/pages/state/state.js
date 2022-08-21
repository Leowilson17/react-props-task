import React, { Component } from "react";
import Child1 from "./state-child";

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      products: [{ name: "Audi" }, { name: "Maruthi" }, { name: "Volvo" }]
    };
  }
  render() {
    return (
      <div>
        {this.state.products.map((data) => (
          <Child1 name={data.name} />
        ))}
      </div>
    );
  }
}

export default Parent;
