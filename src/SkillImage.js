import React, { Component } from "react";

class SkillImage extends Component {
  render() {
    return (
      <span className="menu-li">
          <img src={this.props.image} alt="" className="menu-img" />
      </span>
    );
  }
}

export default SkillImage;
