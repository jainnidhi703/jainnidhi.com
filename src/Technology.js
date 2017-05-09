import React, { Component } from "react";

class Technology extends Component {
  render() {
    return (
      <span className="menu-li">
          <img src={this.props.imageName} alt="" className="menu-img" />
      </span>
    );
  }
}

export default Technology;
