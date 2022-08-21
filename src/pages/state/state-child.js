import React, { Component } from "react";
class Child1 extends Component {
    render() {
        // console.log(this);
      return (
        <div>
          <p>{this.props.name}</p>
        </div>
      );
    }
  }
export default Child1;